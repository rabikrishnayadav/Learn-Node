
/*
-----------------
 Event Module
-----------------

node.js jas a built in module called 'events'
where we can create, fire, and listen for own events.

example 1 - Resgistering for the event to be fired only one time using once.

example 2 - Create an event emitter instance and registe a couple of callbacks

example 3 - Registering for the event with callback parameters

*/

const EventEmitter = require('events');     // importing EventEmitter Class

const event = new EventEmitter();   // creat new object

// example 1
event.on('name', () => {
    console.log('My Name Is Rabi Kr Yadav');
});

event.emit('name');

// example 2

event.on('name', () => {
    console.log('My First Name Is Rabi');
});

event.on('name', () => {
    console.log('My Last Name Is Yadav');
});

event.emit('name');     // here multiple function is calling


// example 3

event.on('checkPage',(sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage',200,'ok');