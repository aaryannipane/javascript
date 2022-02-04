// Include file system module
const fs = require("fs");

// NOTE:- Asynchronus function requires a callback func compulsory.....


// Create file and write data in it 
// fs.writeFile(file path / name, data, callback func)
fs.writeFile("fs_async_module.txt", "This file is created with fs.writeFile() method",
(err)=>{  // err argument required
    // callback is compulsory for async method 
    console.log("File Created Sucessfully");
    console.log(err);
}); // takes callback func compulsory
// if fs_async_module.txt file is not exist in this folder than it will create the file and write data in this file 
// if above file exist than it will only update data in this file

// Append data in the file without overriding previous data
fs.appendFile("fs_async_module.txt", "\n\nThis Data is Appended in this file with fs.appendFile()", "utf8", 
(err)=>console.log("Data Appended Succesfully.\n\n")
); // callback required


//  Node.js includes an additional data type called buffer
// (Not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// While reading from a file or reciving packets over the network

// Read specific file data but in buffer data with fs.readFile() method
fs.readFile("fs_async_module.txt", 
(err, data)=>{
    // data argument returns buffer data
    console.log(data)
}); // callback function takes two args (error, data)

// read buffer data by changing it to string with toString()
fs.readFile("fs_async_module.txt", 
(err, data)=>{
    // data argument returns buffer data we will change it to string with toString()
    console.log("\n\n--------------------- ORIGINAL DATA 1 --------------------");
    console.log(data.toString());
}); // callback function takes two args (error, data)

// Read specific original file data  with fs.readFile() method with utf-8 argument
fs.readFile("fs_async_module.txt", "utf-8", 
(err, data)=>{
    //now data argument will returns utf-8 encoded data
    console.log("\n\n--------------------- ORIGINAL DATA 2 --------------------");
    console.log(data) // second method to read original data from the file
}); // callback function takes two args (error, data)