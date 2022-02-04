// CHALLENGE TIME 
// 1: Create a folder with name CRUD
// 2: Create a file in it named bio.txt and add data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt.
// 6: now delete the both the file and the folder.

// include fs module
const { time } = require("console");
const fs = require("fs");

// create folder
try{
    fs.mkdirSync("CRUD");
}
catch {
    console.log("Folder already exists");
}

// create and add data to file
fs.writeFileSync("CRUD/bio.txt", "This is first data", "utf8");

// Append more data into the file
fs.appendFileSync("CRUD/bio.txt", "\n\nThis is second appended data");

// Read data without getting buffer data
const org_data = fs.readFileSync("CRUD/bio.txt", "utf8");
console.log(org_data);

// rename file
fs.renameSync("CRUD/bio.txt", "CRUD/Mybio.txt");


// delete file with fs.unlinkSync()
fs.unlinkSync("./CRUD/Mybio.txt");

// delete folder with fs.rmdirSync()
fs.rmdirSync("./CRUD");

