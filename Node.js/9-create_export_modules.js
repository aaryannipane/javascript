// We can create our own module and export it to any file

// create module file named export_module.js

// import the module with require(Path of module)
// const add = require("./export_module") // only when there is only one function or variable export

// We are using module created by us named add
// const value = add(5, 10);
// console.log(value);

// import like this when have more than one func or var is exporting
const ourModule = require("./export_module");

// When exporting more than one func or var it returns an object 
console.log(ourModule);

// calling add func from the ourModule
const value1 = ourModule.add(5, 10);
console.log(value1);

// calling variable from the ourModule
console.log(ourModule.name);

// calling sub finc from ourModule
console.log(ourModule.sub(5, 10));


// ---------------------------------------- SHORTCUT ----------------------------------------

// import like this when have more than one func or var is exporting
// Shortcut to write only func or var name without object name with object destructuring
const {name,add , sub} = require("./export_module");
console.log(name);




// having doubt than watch :- https://www.youtube.com/watch?v=GtV-_NTlnLg&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=12