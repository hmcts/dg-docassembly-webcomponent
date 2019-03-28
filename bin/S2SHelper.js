'use strict';

const otp = require('otp');
const fetch = require('node-fetch');

const Env = require('./Env');

class S2SHelper {

  constructor() {
    this.s2sUrl = Env.getS2sUrl();
    this.totpSecret = Env.getS2sSecret();
    this.microservice = Env.getS2sMicroservice();
  }

  async getS2sToken() {

    const body = {
      microservice: this.microservice,
      oneTimePassword: otp({ secret: this.totpSecret }).totp(),
    };

    const token = await fetch(`${this.s2sUrl}/lease`, {
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
      method: 'post'
    })
    .then(checkStatus)
    .then(res => res.text())
    .catch(err => console.error(err));
    console.log(`this is the s2sToken ${token}\n`);
    return `Bearer ${token}`;
  }
}

function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw new fetch.FetchError(res.statusText);
  }
}

module.exports = new S2SHelper();
