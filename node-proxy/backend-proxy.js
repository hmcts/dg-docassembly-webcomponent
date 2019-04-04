const express = require("express");
const http = require("http");
const httpProxy = require('http-proxy');

const { proxyPort } = require('./auth/config');
const idamHelper = require('./auth/idam-client');
const s2sHelper = require('./auth/s2s-client');


const assemblyProxy = httpProxy.createProxyServer({
  host: 'http://localhost:4631'
});

const documentsProxy = httpProxy.createProxyServer({
  host: 'http://localhost:4603'
});

const app = express();

async function loadTokens() {
  const idamToken =  await idamHelper.getIdamToken();
  const s2sToken = await s2sHelper.getS2sToken();
  return [idamToken, s2sToken];
}

loadTokens().then(([idamToken, s2sToken]) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use('/api', async (req, res, next) => {

    req.headers['Authorization'] = idamToken;
    req.headers['ServiceAuthorization'] = s2sToken;
    assemblyProxy.web(req, res, {
      target: 'http://localhost:4631/api'
    }, next);

  });

  app.use('/documents', async (req, res, next) => {

    req.headers['user-roles'] = 'caseworker';
    req.headers['ServiceAuthorization'] = s2sToken;
    documentsProxy.web(req, res, {
      target: 'http://localhost:4603/documents'
    }, next);
  });
});

const server = http.createServer(app);

server.listen(proxyPort);

console.log(`listening on port ${proxyPort}`);
