
// Streams are objects that let you read the datafrom a source or write data to a destination in continuous fashion. in Node.js, there are four types of streams - 
// Streaming means listening to music or watching vedio in 'real time', instead of downloading a file to your computer and watching it later

// 1] READABLE - Streams which is used for read operation.
// 2] WRITABLE - Streams which are used for write operation.
// 3] DUPLEX - Stream which can be used for both read and write operation.
// 4] TRANSFORM - A type of duplex stream where the output is computed based on input.

// Each type of stream is an EventEmitter instance and throws several events at different instance of times. For example some of the commonly used events are - 
// 1] data - This event is fired when there is data available to read.
// 2] end - This event is firesd when there is no data to read.
// 3] error - This event is fired ehen there is any error receiving or writing data.
// 4] finish - This event is fired when all the data has benn flushed to underlying system.

// 2nd Way 
// Reading from a stream 
// Create a readable stream 
// Handle stream events -> data, end and error

// Watch video :- https://www.youtube.com/watch?v=ev5pgydOhT8&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=21&t=433s

const fs = require("fs");
const http = require('http');


// create Server
const server = http.createServer();

// on event 
server.on("request", (req, res)=>{
    // WITHOUT STREAMING
    // fs.readFile("./18.1-input.txt", (err, data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

    // WITH STREAMING
    // 2nd Way 
    // Reading from a stream 
    // Create a readable stream 
    // Handle stream events -> data, end and error

    // readable stream
    const rstream = fs.createReadStream("./18.1-input.txt");

    // 1] data
    rstream.on("data", (chunkdata)=>{
        res.write(chunkdata);
    })
    // 2] end
    rstream.on("end", ()=>{
        res.end()
    })
    // 3] end
    rstream.on("error", (err)=>{
        console.log(err);
        res.end("file not found");
    })
})

server.listen("1234", "127.0.0.1");