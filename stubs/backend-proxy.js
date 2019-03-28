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

Promise.all([idamToken, s2sToken]).then(([idamTokenValue, s2sTokenValue]) => {

  console.log("here's the idam token in the proxy:" + idamTokenValue);
  console.log("here's the s2s token in the proxy:" + s2sTokenValue);
  const app = express();

// app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/api', (req, res, next) => {

    req.headers['Authorization'] = idamTokenValue;
    req.headers['ServiceAuthorization'] = s2sTokenValue;
    assemblyProxy.web(req, res, {
      target: 'http://localhost:4631/api'
    }, next);

  });

  app.use('/documents', (req, res, next) => {

    req.headers['ServiceAuthorization'] = s2sTokenValue;
    documentsProxy.web(req, res, {
      target: 'http://localhost:4603'
    }, next);

  });

  const port = process.env.PORT || "9000";

  const server = http.createServer(app);

  app.set("port", port);

  server.listen(port);

  console.log(`listening on port ${port}`);

});
