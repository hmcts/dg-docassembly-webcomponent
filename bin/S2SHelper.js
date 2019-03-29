const otp = require('otp');
const fetch = require('node-fetch');

const { s2sUrl, s2sSecret, s2sMicroservice } = require('./Env');

class S2SHelper {

  async getS2sToken() {

    const body = {
      microservice: s2sMicroservice,
      oneTimePassword: otp({ secret: s2sSecret }).totp(),
    };

    const token = await fetch(`${s2sUrl}/lease`, {
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
