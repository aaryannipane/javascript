// CHALLENGE TIME 
// 1: Create a folder with name ASYN_CRUD
// 2: Create a file in it named bio.txt and add data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt.
// 6: now delete the both the file and then folder.

const fs = require("fs");

// 1
fs.mkdir("ASYNC_CRUD", (err)=>{console.log("1] Folder Created")});

// 2
fs.writeFile("./ASYNC_CRUD/bio.txt", "Hello i am Aryan\n", (err)=>{console.log("2] File Created")});

// 3
fs.appendFile("./ASYNC_CRUD/bio.txt", "Yes this text is appended", (err)=>{console.log("3] Data appended")});

// 4
fs.readFile("./ASYNC_CRUD/bio.txt", "utf-8", (err, data)=>{console.log("4] " + data + "\n" + "data readed")});

// 5
fs.rename("./ASYNC_CRUD/bio.txt", "./ASYNC_CRUD/mybio.txt", (err)=>{console.log("5] File renamed")});

// 6.1
fs.unlink("./ASYNC_CRUD/mybio.txt", (err)=>{console.log("6.1] File deleted(Unlinked)")});

// 6.2
fs.rmdir("./ASYNC_CRUD", (err)=>{console.log("6.2] Folder Deleted")});