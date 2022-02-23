/*

Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

Steaming means listening to music or wwatching video in 'real time', instead of downloading a file on computer and watching it later

In Node.js there are four types of steams

Readable - Stream which is used for read operation.

Writable - Stream which is used for wrote operation.

Duplex - Stream which can be used for both read and write operation.

Transfer - A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws sevral events at different instance if times.

For example, some of the commonly used events are -

data - This event is fired when there is data available to read.

end - This event is fired when there is no more data to read.

error - This event is fired whenthere is any error receiving or writing data.

finish - This event is fired when all the data has been flushed to underlying system

*/

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    const rstream = fs.createReadStream('input.txt');

    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on('end', () => {
        res.end();
    });

    rstream.on('error', (err) => {
        console.log(err);
        res.end('File not found');
    });
});

server.listen(8000,'127.0.0.1');
