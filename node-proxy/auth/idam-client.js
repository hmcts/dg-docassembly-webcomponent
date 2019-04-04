const { URLSearchParams } = require('url');
const btoa = require('btoa');

const USERNAME = 'docassemblytestuser@hmcts.net';
const PASSWORD = '4590fgvhbfgbDdffm3lk4j';
const FIRSTNAME = 'docassembly';
const LASTNAME = 'testuser';

const { idamUrl, oauthClient, oauthRedirect, oauthSecret } = require('./config');
const { ApiClient, jsonContentHdr, formContentHdr} = require('./api-utils');

class IdamClient {

  constructor() {
    this.apiClient = new ApiClient();
  }

  async getIdamToken() {

    await this.createUser();
    const code = await this.getCode();
    const token = await this.getToken(code);
    console.log(`Idam code: ${code}\n Idam token: ${token}\n`);

    return `Bearer ${token}`;
  }

  async createUser() {
    const userDetails = { email: USERNAME, password: PASSWORD, forename: FIRSTNAME, surname: LASTNAME };

    try {
      await this.apiClient.post(`${idamUrl}/testing-support/accounts`, jsonContentHdr, JSON.stringify(userDetails));
    } catch (exception) {
      console.log(`An exception was thrown while trying to create a user \n ${JSON.stringify(exception)}`);
    }
  }

  async getCode() {
    const authHeader = btoa(`${USERNAME}:${PASSWORD}`);
    const headers = { ...formContentHdr, 'Authorization': `Basic ${authHeader}` };
    const params = new URLSearchParams();
    params.append('redirect_uri', oauthRedirect);
    params.append('client_id', oauthClient);
    params.append('response_type', 'code');

    const res = await this.apiClient.fetchJson(`${idamUrl}/oauth2/authorize`, headers, params);
    return res.code;
  }

  async getToken(code) {
    const params = new URLSearchParams();
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', oauthRedirect);
    params.append('client_id', oauthClient);
    params.append('client_secret', oauthSecret);

    const res = await this.apiClient.fetchJson(`${idamUrl}/oauth2/token`, formContentHdr, params);
    return res['access_token'];
  }
}

module.exports = new IdamClient();
