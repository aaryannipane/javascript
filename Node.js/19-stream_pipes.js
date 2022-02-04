
// stream.pipe(), the method used to take a readable stream and connect it to a writable steam

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{
    const rstream = fs.createReadStream("./18.1-input.txt");
    rstream.pipe(res); // one line of code for 18-stream.js code
    // pipe(file where to write data);
})

server.listen("1234", "127.0.0.1");