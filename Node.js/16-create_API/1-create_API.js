// API is the acronym for Application proggraming interface, which is software intermediary that allows ywo applications to talk to each other. Each time you use an app like FaceBook, Send an instant message, or check the weather on your phone, you're using an API
// use api to get data

// 1] create json file to store data 
// 2] use http to make server
// 3] open json in this file for response on server when user requests.

// module use
const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res)=>{

    const data = fs.readFileSync(`${__dirname}/0-api_data.json`, "utf-8")
    // convert data into object 
    const objData = JSON.parse(data);
    


    if(req.url == "/"){
        res.end("Welcome to Home Page");
    }
    else if(req.url == "/contact"){
        res.end("Contact via call or message");
    }
    else if(req.url == "/userapi"){
        // when user request for userapi we will call json file 
        // open json file with fs module inside createServer callback at Top 

        // use writeHead to tell browser what Type of data we are using
        res.writeHead(200, {"Content-type":"json"});  //IMP

        // our object is inside array
        res.end(objData[0].name +" "+objData[0].sirname);
        
    }
    else{
        res.writeHead("404", "Error hai toh mein Kya karu", {"Content-type":"text/html"});
        res.end("<h2>404 Error Page Not Found :(</h2>");
    }
});

server.listen(1234, "127.0.0.1", ()=>{console.log("Listening to port 1234")});