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
