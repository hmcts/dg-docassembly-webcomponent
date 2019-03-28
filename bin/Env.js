'use strict';

  const defaults = {
    PROXY: 'false',
    TEST_URL: 'http://localhost:8080',
    IDAM_API_BASE_URI: 'http://localhost:4501',
    OAUTH_CLIENT: 'webshow',
    IDAM_WEBSHOW_WHITELIST: 'http://localhost:8080/oauth2redirect',
    FUNCTIONAL_TEST_CLIENT_OAUTH_SECRET: 'AAAAAAAAAAAAAAAA',
    S2S_BASE_URI: 'http://localhost:4502',
    FUNCTIONAL_TEST_CLIENT_S2S_TOKEN: 'AAAAAAAAAAAAAAAA',
    S2S_SERVICE_NAME: 'em_gw'
  };

  const getUseProxy = () => {
    return getProperty("PROXY");
  };

  const getTestUrl = () => {
    return getProperty("TEST_URL");
  };

  const getIdamUrl = () => {
    return getProperty("IDAM_API_BASE_URI");
  };

  const getOAuthClient = () => {
    return getProperty("OAUTH_CLIENT");
  };

  const getOAuthRedirect = () => {
    return getProperty("IDAM_WEBSHOW_WHITELIST");
  };

  const getOAuthSecret = () => {
    return getProperty("FUNCTIONAL_TEST_CLIENT_OAUTH_SECRET");
  };

  const getS2sUrl = () => {
    return getProperty("S2S_BASE_URI");
  };

  const getS2sSecret = () => {
    return getProperty("FUNCTIONAL_TEST_CLIENT_S2S_TOKEN");
  };

  const getS2sMicroservice = () => {
    return getProperty("S2S_SERVICE_NAME");
  };

  const getProperty = (name) => {
    return process.env && process.env[name] ? process.env[name] : defaults[name];
  };

module.exports = {
  getUseProxy,
  getTestUrl,
  getIdamUrl,
  getOAuthClient,
  getOAuthRedirect,
  getOAuthSecret,
  getS2sUrl,
  getS2sSecret,
  getS2sMicroservice
};
