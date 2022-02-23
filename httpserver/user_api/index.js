/*

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
Each time we use an app like facebook, send an instant message, or check tht weather on our phone, we're using an api.

*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFileSync('userapi.json','utf-8')
    const objData = JSON.parse(data);
    if(req.url == '/'){
    res.end('Hello from the main server sides with node');
    }else if(req.url == '/userapi'){
        res.writeHead(200, {"Content-type" : "application/json"});
        res.end(objData[3].name);
    }else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end('<h1>404 error page. page does not exits</h1>');
    }
});

server.listen(8000,'127.0.0.1', () => {
    console.log('listening to the port no 8000');
});
