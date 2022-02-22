const fs = require('fs'); // including file system code module

// CRUD Operation Using FS Module with Synchoronus Method

// 1: Create a folder
// fs.mkdirSync('FileSystem');
// 2: Create a file with some data
// fs.writeFileSync('filesystem/bio.txt','name:rabi kryadav');
// 3: Update Data into the file at the end of the existing data.
// fs.appendFileSync('filesystem/bio.txt',' course:node');
// 4: Read the data without getting buffer data at first.
// const data = fs.readFileSync('filesystem/bio.txt','utf-8');
// console.log(data);
// 5: Reaname the file name
// fs.renameSync('filesystem/bio.txt','filesystem/bioData.txt')
// 6: Delete file and folder 
// fs.rmSync('filesystem/bioData.txt');         // first method
// fs.unlinkSync('filesystem/bioData.txt');     // second method
// fs.rmdirSync('FileSystem');      // for delete folder

 
// CRUD Operation Using FS Module with Asynchoronus Method
    
    // 1: Create a folder
        fs.mkdir('filesys', (err) => {
            console.log('folder created');
            console.log(err);
        });

    // 2: Create a file with some data
        fs.writeFile('filesys/bio.txt','Name:Rabi Kr Yadav', (err) => {
            console.log('file is created');
            console.log(err);
        });
    
    // 3: Update Data into the file at the end of the existing data.
        fs.appendFile('filesys/bio.txt','Course: Node.js', (err) => {
            console.log('data updated');
            console.log(err);
        } );
    
    // 4: Read the data without getting buffer data at first.
        fs.readFile('filesys/bio.txt','utf-8', (err, data) => {
            console.log(data);
            console.log(err);
        });
        
        // 5: Reaname the file name
        fs.rename('filesys/bio.txt','filesys/bioData.txt', (err) => {
            console.log('file name is changed');
            console.log(err);
        });
        // 6: Delete file
        fs.unlink('filesys/bioData.txt', (err) => {
            console.log('file deleted');
            console.log(err);
        });
        // 6: Delete folder
        fs.rmdir('./filesys', (err) => {
            console.log('folder is deleted');
            console.log(err);
        });


