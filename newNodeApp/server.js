import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.statusCode = 404;
  res.end('<h1>Hey There</h1>');
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})