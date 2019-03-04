'use strict';

const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');
const atob = require('atob');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/template-renditions', (req, res) => {
  res.send({
    formPayload: req.body.formPayload,
    outputType: { fileExtension: ".pdf", mediaType: "application/pdf" },
    renditionOutputLocation: 'http://localhost:4200/assets/non-dm.pdf'
  });
});

app.get('/api/form-definitions/:templateId', (req, res) => {
  const templateName = atob(req.params.templateId);
  console.log(`heres the template name ${templateName}`);
  const uiDefinition = require(`./${templateName}`);
  res.send(uiDefinition);
});

const port = process.env.PORT || "9000";

const server = http.createServer(app);

app.set("port", port);

server.listen(port);
