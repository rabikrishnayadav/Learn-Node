// Operating System info with OS Module
const os = require('os');

console.log(os.arch());     // this will show system architechure

const freeMemory = os.freemem();
console.log('free memory is:',freeMemory,'bytes'); // free memory in bytes
console.log('free memory is:',`${freeMemory/1024/1024/1024}`,'gb'); // free memory in gb

console.log(os.hostname());  // for get host name
console.log(os.platform()); // for get os platform
console.log(os.type());     // for get os name
console.log(os.tmpdir());   // get tem file dir url