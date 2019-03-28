'use strict';

const express = require("express");
const http = require("http");
const httpProxy = require('http-proxy');

const assemblyProxy = httpProxy.createProxyServer({
  host: 'http://localhost:4631'
});

const documentsProxy = httpProxy.createProxyServer({
  host: 'http://localhost:4603'
});

const idamToken = require('../bin/IdamHelper').getIdamToken();
const s2sToken = require('../bin/S2SHelper').getS2sToken();


console.log('here\'s the idam token in the proxy: ' + idamToken);
console.log('here\'s the s2s token in the proxy: ' + s2sToken);
const app = express();

// app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', async (req, res, next) => {

  req.headers['Authorization'] = await idamToken;
  req.headers['ServiceAuthorization'] = await s2sToken;
  assemblyProxy.web(req, res, {
    target: 'http://localhost:4631/api'
  }, next);

});

app.use('/documents', async (req, res, next) => {

  req.headers['user-roles'] = 'caseworker';
  req.headers['ServiceAuthorization'] = await s2sToken;
  documentsProxy.web(req, res, {
    target: 'http://localhost:4603/documents'
  }, next);

});

const port = process.env.PORT || '9000';

const server = http.createServer(app);

app.set('port', port);

server.listen(port);

console.log(`listening on port ${port}`);

