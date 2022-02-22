console.log('welcome to learn node');

const fs = require('fs'); // including file system code module

// Working on Own Module
    // const {name, add, sub, mult} = require('./operator.js');

    // console.log('This is ',name);
    // console.log(add(5, 5));
    // console.log(sub(8,2));
    // console.log(mult(8,2));

// for use npm
// write 'npm init' in command line
// write the require data at installing time

// use chalk dependency
    // const chalk = require('./chalk');
    // const log = console.log;
    // // Combine styled and normal strings
    // log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// use validator

    // const validator = require('validator');

    // const res = validator.isEmail("rabi@mail.com");
    // console.log(res);


// Web Server

/*
To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application

e.g IIS is a web server for ASP.NET web applications and Apache is a web werver for PHP or Java web applications.

Node.js provides capabilities to create own web server which will handle HTTP requests asynchronously.
We can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

-------------------------------------------
        Create a Server
-------------------------------------------

The http.createServer() method includes request and response parameters which is supplied by node.js

The request object can be used to get information about the current HTTP request
e.g. url, request header, and data.

The response object can be used to send a respose for a current HTTP request.

If the respose from the HTTP server is supposed to be displayed as HTML, we should include an HTTP header with the correct content type

*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the other sides with node');
});

server.listen(8000,'127.0.0.1', () => {
    console.log('listening to the port no 8000');
});