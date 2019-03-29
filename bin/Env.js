module.exports = {
  idamUrl: getEnvOr('IDAM_API_BASE_URI', 'http://localhost:4501'),
  oauthClient: getEnvOr('OAUTH_CLIENT', 'webshow'),
  oauthRedirect: getEnvOr('IDAM_WEBSHOW_WHITELIST', 'http://localhost:8080/oauth2redirect'),
  oauthSecret: getEnvOr('FUNCTIONAL_TEST_CLIENT_OAUTH_SECRET', 'AAAAAAAAAAAAAAAA'),
  s2sUrl: getEnvOr('S2S_BASE_URI', 'http://localhost:4502'),
  s2sSecret: getEnvOr('FUNCTIONAL_TEST_CLIENT_S2S_TOKEN', 'AAAAAAAAAAAAAAAA'),
  s2sMicroservice: getEnvOr('S2S_SERVICE_NAME', 'em_gw'),
  proxyPort: getEnvOr('PORT', 9000)
};

function getEnvOr(property, defaultValue) {
  return (typeof process !== 'undefined' && process.env[property]) || defaultValue;
}
