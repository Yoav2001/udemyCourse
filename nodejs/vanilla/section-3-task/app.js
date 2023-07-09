const http = require('http');
const PORT = 3000;
const routes = require('./routes');
const { log } = require('console');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(PORT);
console.log(`app listen on port ${PORT}`);
