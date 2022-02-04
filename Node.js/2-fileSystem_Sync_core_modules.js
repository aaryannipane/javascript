// Node.js Core Modules
/*Consider modules to be the same as JavaScript libraries. A set of functionsyou want to include in your application*/
/*Node.js has a set of built-in modules which you can use withoutany further installation*/ 

// TO RUN JS FILE WITHOUT USING CHROME BROWSER WRITE IN TERMINAL THIS LINE
// node 2-core_modules.js
const name = "Aryan";
console.log(name);


// FILE SYSTEM (METHODS & PROPERTIES) :- https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
// include file system (fs) module in this file 
const fs = require("fs");

// Create file and write data in it 
// fs.writeFileSync(file path / name, data)
fs.writeFileSync("fs_sync_module.txt", "This File is created with node js module fs.writeFileSync()\nHello I am Updated"); // no callback func
// if fs_sync_module.txt file is not exist in this folder than it will create the file and write data in this file 
// if above file exist than it will only update data in this file

// Append data in the file without overriding previous data
fs.appendFileSync("fs_sync_module.txt", "\n\nThis Data is Appended in this file with fs.appendFileSync()", "utf8");

//  Node.js includes an additional data type called buffer
// (Not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// While reading from a file or reciving packets over the network

// Read specific file data but in buffer data with fs.readFileSync() method
const buffer_data = fs.readFileSync("fs_sync_module.txt");
console.log("\n\n--------------------- BUFFER DATA --------------------");
console.log(buffer_data) // returns buffer data
// read buffer data by changing it to string with toString()
const org_data1 = buffer_data.toString();
console.log("\n\n--------------------- ORIGINAL DATA 1 --------------------");
console.log(org_data1);

// Read specific original file data data with fs.readFileSync() method
const org_data2 = fs.readFileSync("fs_sync_module.txt", "utf8");  // second method to read original data from the file
console.log("\n\n--------------------- ORIGINAL DATA 2 --------------------");
console.log(org_data2);

// Rename existing file with fs.renameSync("old file path name", "new path name") method
// fs.renameSync("fs_sync_module.txt", "fs_sync_module_renamed.txt");