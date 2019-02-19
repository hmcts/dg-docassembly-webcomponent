'use strict';

const express = require("express");
const http = require("http");
const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/ui-definition", (req, res) => {
  res.send([
    {
      'key': 'firstName',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'First name',
        'options': []
      },
      'fieldArray': null
    },
    {
      'key': 'lastName',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Last name',
        'options': []
      },
      'fieldArray': null
    }
  ]);
});

const port = process.env.PORT || "9000";

const server = http.createServer(app);

app.set("port", port);

server.listen(port);
