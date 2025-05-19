
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://45.143.196.191:25565' }, err => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Proxy error.');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
