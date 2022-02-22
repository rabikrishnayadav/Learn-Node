console.log('welcome to learn node');

const fs = require('fs'); // including file system code module

// Working on Own Module
const {name, add, sub, mult} = require('./operator.js');

console.log(name);
console.log(add(5, 5));
console.log(sub(8,2));
console.log(mult(8,2));