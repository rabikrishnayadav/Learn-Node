console.log('welcome to learn node');

// CRUD Operation Using FS Module using async

const fs = require('fs'); // including file system code module

// for create file
fs.writeFile('read.txt','This file is created with async method', (err) => {
    console.log('file is created');
    console.log(err);
});

// here we pass them a function as an argument a callback that gets called when that task completes.
// the callback has an argument that tells you whether the operation completed successfully.
// Now we need to say wheat to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

// for update file data
fs.appendFile('read.txt','This is rabi', (err) => {
    console.log('file is updated');
    console.log(err);
});

// for read file data
fs.readFile('read.txt','utf-8', (err, data) => {
    console.log(data);
    console.log(err);
});