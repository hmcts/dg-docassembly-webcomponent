var HttpsProxyAgent = require('https-proxy-agent');

const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "http://localhost:8080",
    secure: false,
    "bypass": function (req, res, proxyOptions) {
      req.headers["Authorization"] = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NjBkMjJzdXI4azNlbmNkNXE3bm9qazNibiIsInN1YiI6IjU2OTA3IiwiaWF0IjoxNTUxNDY2ODMxLCJleHAiOjE1NTE0ODQ4MzEsImRhdGEiOiJjYXNld29ya2VyLGNhc2V3b3JrZXItbG9hMCIsInR5cGUiOiJBQ0NFU1MiLCJpZCI6IjU2OTA3IiwiZm9yZW5hbWUiOiJJbnRlZ3JhdGlvbiIsInN1cm5hbWUiOiJUZXN0IiwiZGVmYXVsdC1zZXJ2aWNlIjoiUHJvYmF0ZSIsImxvYSI6MCwiZGVmYXVsdC11cmwiOiJodHRwczovL3d3dy1kZXYucHJvYmF0ZS5yZWZvcm0uaG1jdHMubmV0IiwiZ3JvdXAiOiJwcm9iYXRlLXByaXZhdGUtYmV0YSJ9.qrrIKW_QMtN_kzLiHDbTGjKO6sN3X1830wUTFb41WI0";
      req.headers["ServiceAuthorization"] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbV9ndyIsImV4cCI6MTU1MTQ4MTIyOH0.3XyQG1q_IzN-4NoM3bhjq2X0JR-XoK8Pkq2cquAFXBSBJy8-hHupZElD9_GWMVdPcllQv7h-B_9MkGLabIcQkQ";
    }
  }
]

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = PROXY_CONFIG;
