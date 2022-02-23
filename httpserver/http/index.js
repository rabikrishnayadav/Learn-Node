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
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
    res.end('Hello from the main server sides with node');
    }else if(req.url == '/about'){
    res.end('Hello from the about sides with node');
    }else if(req.url == '/contact'){
    res.end('Hello from the contact sides with node');
    }else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end('<h1>404 error page. page does not exits</h1>');
    }
});

server.listen(8000,'127.0.0.1', () => {
    console.log('listening to the port no 8000');
});
