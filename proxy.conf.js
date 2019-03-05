const execSync = require('child_process').execSync;

const idamToken = execSync('./bin/idamToken.sh').toString().trim();
const s2s = execSync('./bin/s2s.sh').toString().trim();

console.log(`Authorization: ${idamToken}`);
console.log(`ServiceAuthorization: ${s2s}`);

module.exports = [
  {
    context: [
      '/documents'
    ],
    target: 'http://localhost:4603',
    secure: false,
    'bypass':  function (req, res, proxyOptions) {
      req.headers['user-roles'] = 'caseworker';
      req.headers['ServiceAuthorization'] = s2s;
    }
  },
  {
    context: [
      '/api'
    ],
    target: 'http://localhost:4631',
    secure: false,
    'bypass':  function (req, res, proxyOptions) {
      req.headers['Authorization'] = idamToken;
      req.headers['ServiceAuthorization'] = s2s;

    }
  }
];
