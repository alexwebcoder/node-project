const http = require('http');

function processRequest(req, res) {
    const body = 'Thanks for calling!';
    const content_length = body.lenggth;
    res.writeHead(200, {
        'Content-Length' : content_length,
        'Content-Type' : 'text/plain'
    });
    res.end(body);
}

const s = http.createServer(processRequest);
s.listen(8080)