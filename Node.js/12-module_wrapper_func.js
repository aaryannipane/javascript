// When we run this file node.js adds some module wrappers function in it 
// Lern more :- https://www.youtube.com/watch?v=kT2mSjAcYxM&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=15

// module wrapper function is same as also known as immediately invoked function expression(IIFE)
// ()-> grouping, (anonymus function)
// it has parameters which is added by node.js's 
// below code is behind the scene 
(function(exports, require, module, _filename, _dirname){
    // all the data in it is private not global scope
    const fs = require("fs");
    console.log("Hello");
})();


// what we see. later node add below code to module wrapper function
// const fs = require("fs");
// console.log("World");
