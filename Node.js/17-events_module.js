// EVENTS MODULES
// Node.js has a built-in module, called "Events",
// Where you can create-, fire-, and listen for- your own events.

// Example 1:- Registering for the event to be fired only one time using once 
// Example 2:- Create an event emitter instance and register a couple of callbacks
// Example 3:- Registering for the event with call back parameters

// events module returns class
const EventEmitter = require("events");

// create an object of class EventEmitter ------1
const event = new EventEmitter();      

// create work for SayMyName event with on(event name, callback func) method ------2
event.on("SayMyName", ()=>{
    // define event before emit(call) it
    console.log("Your name is Aryan");
})
event.on("SayMyName", ()=>{
    // define event before emit(call) it
    console.log("Your name is Babu");
})
event.on("SayMyName", ()=>{
    // define event before emit(call) it
    console.log("Your name is Nothing");
})
// we can call multiple func on any event


// emit(call) event
event.emit("SayMyName");


// event function for callback parameter ------3
event.on("checkPage", (statusCode, msg)=>{
    console.log(`Your status code is ${statusCode} and message is ${msg}`);
});

// emit above function with arguments
event.emit("checkPage", 200, "ok");