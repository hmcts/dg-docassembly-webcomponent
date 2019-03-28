'use strict';

const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const btoa = require('btoa');

const USERNAME = 'docassemblytestuser@hmcts.net';
const PASSWORD = '4590fgvhbfgbDdffm3lk4j';
const FIRSTNAME = 'docassembly';
const LASTNAME = 'testuser';

const Env = require('./Env');

class IdamHelper {

  constructor() {
    this.idamUrl = Env.getIdamUrl();
    this.client = Env.getOAuthClient();
    this.secret = Env.getOAuthSecret();
    this.redirect = Env.getOAuthRedirect();
  }

  async getIdamToken() {
    await this.createUser();
    const code = await this.getCode();
    console.log(`this is the code ${code}\n`);
    const token = await this.getToken(code);
    console.log(`this is the token ${token}\n`);
    return `Bearer ${token}`;
  }

  createUser() {

    const body = {
      email: USERNAME,
      password: PASSWORD,
      forename: FIRSTNAME,
      surname: LASTNAME
    };

    fetch(`${this.idamUrl}/testing-support/accounts`, {
      method: 'post',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(checkStatus)
    .catch(err => console.error(err));
  }

  getCode() {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const authHeader = btoa(credentials);
    const params = new URLSearchParams();
    params.append('redirect_uri', this.redirect);
    params.append('client_id', this.client);
    params.append('response_type', 'code');

    return fetch(`${this.idamUrl}/oauth2/authorize`,{
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${authHeader}`
      }
    })
    .then(checkStatus)
    .then(res => res.json())
    .then(json => json.code)
    .catch(err => console.error(err));
  }

  getToken(code) {

    const params = new URLSearchParams();
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', this.redirect);
    params.append('client_id', this.client);
    params.append('client_secret', this.secret);

    return fetch(`${this.idamUrl}/oauth2/token`,{
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(checkStatus)
      .then(res => res.json())
      .then(json => json['access_token'])
      .catch(err => console.error(err));
  }
}

function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw new fetch.FetchError(res);
  }
}

module.exports = new IdamHelper();
