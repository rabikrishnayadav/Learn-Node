// CRUD Operation Using FS Module

const fs = require('fs'); // including file system code module

// 1: Create a folder
    // fs.mkdirSync('FileSystem');
// 2: Create a file with some data
    fs.writeFileSync('filesystem/bio.txt','name:rabi kryadav');
// 3: Update Data into the file at the end of the existing data.
    fs.appendFileSync('filesystem/bio.txt',' course:node');
// 4: Read the data without getting buffer data at first.
    const data = fs.readFileSync('filesystem/bio.txt','utf-8');
    console.log(data);
// 5: Reaname the file name
    fs.renameSync('filesystem/bio.txt','filesystem/bioData.txt')
// 6: Delete file and folder 
    // fs.rmSync('filesystem/bioData.txt');         // first method
    // fs.unlinkSync('filesystem/bioData.txt');     // second method
    // fs.rmdirSync('FileSystem');      // for delete folder