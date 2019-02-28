'use strict';

const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');

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
  res.send([
    {
      'key': 'exampleInput',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Example text input',
        'options': []
      },
      'fieldArray': null
    },
    {
      'key': 'exampleSelect',
      'type': 'select',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Select the correct option',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      },
      'fieldArray': null
    },
    {
      'key': 'exampleCheckbox',
      'type': 'checkbox',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Tick all that apply',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      },
      'fieldArray': null
    },
    {
      'key': 'exampleRadio',
      'type': 'radio',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Select one of the options below',
        'options': [
          { value: 'option-1', label: 'Option 1'},
          { value: 'option-2', label: 'Option 2'},
          { value: 'option-3', label: 'Option 3'},
          { value: 'option-4', label: 'Option 4'}
        ]
      },
      'fieldArray': null
    },
    {
      'key': 'exampleTextArea',
      'type': 'textarea',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Example text area',
        'cols': 5,
        'rows': 5
      },
      'fieldArray': null
    }
  ]);
});

const port = process.env.PORT || "9000";

const server = http.createServer(app);

app.set("port", port);

server.listen(port);
