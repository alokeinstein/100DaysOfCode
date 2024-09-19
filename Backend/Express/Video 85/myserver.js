// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

//In this file server is made by using just node so we have write many lines of code once we will start using the express we dont have to that much kind of work and things will be modularized 
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//npm init
//npm i express jsonwebtoken dotenv
//