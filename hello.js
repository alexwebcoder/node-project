const http = require('http');

const listener = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h2 style="text-align: center;">Hello There</h2>');
};

const server = http.createServer(listener);
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
