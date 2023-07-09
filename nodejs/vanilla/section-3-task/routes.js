const { log } = require('console');
const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/'&& method ==='GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head> <title>Enter Message</title> </head><body><form action="/create-user" method="POST"><input type="text" name="name-user"><button type="submit">Send</button></form></body> <body> <h1>Welcome to the homepage</h1> </body> </html>');
    return res.end();
  }
  
  if (url === '/user' && method === 'GET') {
        res.write(
        '<html> <ul> <li><h1>yoav</h1> <h1>elkana</h1> <h1>yoavelkana@gmail.com</h1></li> <li><h1>yoav</h1> <h1>elkana</h1> <h1>yoavelkana@gmail.com</h1></li> <li><h1>yoav</h1> <h1>elkana</h1> <h1>yoavelkana@gmail.com</h1></li> </ul></html>')
        return res.end();

  }
  if(url==='/create-user' && method ==='POST'){
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split('=')[1];
      console.log(`the name of the user is ${name}`);
      return res.end();
    });
   
  }
  res.setHeader('Content-Type', 'text/html');

  res.end();
};



module.exports.handler = requestHandler;
module.exports.someText = 'Some text';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';