// NOTE ALWAYS USE ASYNCHRONUS FUNC OR METHOD IT WILL NOT WAIT FOR ANY TASK TO COMPLETE

const fs = require("fs");

// sync method
const sync_data = fs.readFileSync("fs_sync_module.txt", "utf-8");
console.log(sync_data);
// below text will log only after above task gets completed
console.log("------------------After sync method------------------\n")

// Async method -----> strongly preffered
fs.readFile("fs_async_module.txt", "utf-8",
(err, data)=>{
    console.log(data);
})
// below text will not wait for above task to complete or not
console.log("------------------After Async method------------------")