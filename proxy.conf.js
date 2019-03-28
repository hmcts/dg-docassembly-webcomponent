// const execSync = require('child_process').execSync;
//
// const idamToken = execSync('./bin/idamToken.sh').toString().trim();
// const s2s = execSync('./bin/s2s.sh').toString().trim();
//
// console.log(`Authorization: ${idamToken}`);
// console.log(`ServiceAuthorization: ${s2s}`);

module.exports = [
  {
    context: [
      '/documents'
    ],
    target: 'http://localhost:9000',
    secure: false
  },
  {
    context: [
      '/api'
    ],
    target: 'http://localhost:9000',
    secure: false
  }
];
