// The path module provides utilities for working with file and directory paths.
// It can be accessed using const path = require('path');

const path = require('path');

console.log(path.dirname('C:/xampp/htdocs/react/learn-node/pathmod.js'));
console.log(path.extname('C:/xampp/htdocs/react/learn-node/pathmod.js'));
console.log(path.basename('C:/xampp/htdocs/react/learn-node/pathmod.js'));

// for finding the (dir, root, base, name,ext) in object form use parse();
console.log(path.parse('C:/xampp/htdocs/react/learn-node/pathmod.js'));

// for finding the (dir, root, base, name,ext) in seperate with parse();
const mypath = path.parse('C:/xampp/htdocs/react/learn-node/pathmod.js');
console.log(mypath.root);
console.log(mypath.dir);
console.log(mypath.base);
console.log(mypath.name);
console.log(mypath.ext);