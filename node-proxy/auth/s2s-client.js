const otp = require('otp');
const { ApiClient, jsonContentHdr} = require('./api-utils');

const { s2sUrl, s2sSecret, s2sMicroservice } = require('./config');

class S2sClient {

  constructor() {
    this.apiClient = new ApiClient();
  }

  async getS2sToken() {

    const body = {
      microservice: s2sMicroservice,
      oneTimePassword: otp({ secret: s2sSecret }).totp(),
    };

    const token = await this.apiClient.fetchText(`${s2sUrl}/lease`, jsonContentHdr, JSON.stringify(body));
    console.log(`this is the s2sToken ${token}\n`);

    return `Bearer ${token}`;
  }
}

module.exports = new S2sClient();
