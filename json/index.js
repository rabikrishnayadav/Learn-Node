/*
----------------------------------
            JSON
----------------------------------
JSON stands for JavaScript Object Notation.
JSON is a lighweight format for storing and transporting data.
JSON is opten used when data is sent from a server to a web page.

*/

// creating bioData Object
const bioData = {
    name : 'Rabi Kr Yadav',
    age  : 25,
    address : 'Janakpur, Nepal'
};

console.log(bioData);   // getting all data
console.log(bioData.name);   // getting only name

// Covert object to JSON
const jsonData = JSON.stringify(bioData);   // getting data in JSON format from object
console.log(jsonData);  // getting all data

// Cover JSON to Object
const objData = JSON.parse(jsonData);   // getting data in Object format from json
console.log(objData);

// send the json data into another file
const fs = require('fs');
fs.writeFile('json.json', jsonData, (err) => {
    console.log('done');
});

// read json data
fs.readFile('json.json','utf-8', (err,data) => {
    console.log(data);
    const objData = JSON.parse(data);   // for convert in object
    console.log(err);
    console.log(objData);
});

