// Core Module 
// consider modules to be the same as javascript libraries. a set of functions you want to include in your application.

// Node.js has a set of built-in modules which you can use without any further installation

const name = 'Rabi kr Yadav';
console.log(name);

// for use the module write ruquire('moduleName')

const fs = require('fs');

// for creating a new file
fs.writeFileSync('read.txt','This file created with fs module');

// for update file data here it will remove old data and insert new data inside file
fs.writeFileSync('read.txt','This file created with file system module');

// for insert new data in existing file
fs.appendFileSync('read.txt',' This rabi kr yadav');

// for read other file data
const buf_data = fs.readFileSync('index.js');
console.log(buf_data);

// Node.js includes a additional data type called Buffer. which is not available in browser's javascript.
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

org_data = buf_data.toString(); // this will show data in string
console.log(org_data);

// for change the file name
fs.renameSync('read.txt','readwrite.txt');