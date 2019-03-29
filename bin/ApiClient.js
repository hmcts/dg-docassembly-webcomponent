const fetch = require('node-fetch');
const formContentHdr = { 'Content-Type': 'application/x-www-form-urlencoded' };
const jsonContentHdr = { 'Content-Type': 'application/json' };


class ApiClient {

  async fetchJson(url, headers, body) {
    const res = await this.post(url, headers, body);
    return await res.json();
  }

  async fetchText(url, headers, body) {
    const res = await this.post(url, headers, body);
    return await res.text();
  }

  async post(url, headers, body) {

    const fetchResponse = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
      timeout: 60000
    });

    return this.checkStatus(fetchResponse);
  }

  checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
      return res;
    } else {
      throw new fetch.FetchError(res);
    }
  }
}

module.exports = { ApiClient, formContentHdr, jsonContentHdr };
