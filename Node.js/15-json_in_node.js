// NOTE DON'T RUN THIS FILE WITH nodemon because it contains fs module


// JSON -> Javascript Object Notation
// json is lightweight format for storing and transporting data.
// JSON is often used when data is sent from server to web page

// example
// normal object of javascript
const bioData = {
    name : "Aryan",
    age : 18
}

// JSON.stringyfy(object name) is use to convert Object to JSON
const jsonData = JSON.stringify(bioData);
console.log(jsonData);  // json data is ---> {"name":"Aryan","age":18}

// JSON.parse() is used to convert json to object which we can use to retrive data
const objData = JSON.parse(jsonData);
// access to objData
console.log(objData.name);

// CHALLENGE 
// 1] create an object containing data
// 2] convert object to json 
// 3] create and add json data to 15.1_jsonData.json file
// 4] read 15.1_jsonData.json file and store it in variable
// 5] convert that variable to object and log that object in console

// 1-> using above object as 1 step

// 2-> 
const jsonData1 = JSON.stringify(bioData);

// 3->
const fs = require("fs");
fs.writeFile("./15.1jsonData.json", jsonData1, (err)=>console.log("\nJSON File created and json data is added to it"));

// 4->
fs.readFile("./15.1jsonData.json", "UTF-8", (err, data)=>{
    const objData1 = JSON.parse(data);
    console.log(objData1);
});