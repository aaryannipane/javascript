// When user request specific url like url/contact, url/about, url/home
// we use url module to get what user is requesting for


const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // Get what user is requesting for with (req.url)
    var userRequest = req.url;
    // to get request go to server on browser and write /contact after url
    console.log(userRequest);

    // Routing the webpages with if else
    if(req.url == "/"){
        // res.write() is use to write on page use res.end to end response
        res.write("Welcome to Homepage");
        res.end();
    }
    else if(req.url == "/about"){
        res.end("Welcome to About page")
    }
    else if(req.url == "/contact"){
        res.end("Welcome to Contact page")
    }
    else{
        // if user enter path that is not exist than this block will run

        // to show error in console and change status code from 200(OK) to 404(Page not exist).
        // we use res.writeHead(status code, reason"NOT MANDATORY")
        res.writeHead("404", {"Content-type":"text/html"});

        // we can pass html tags inside quotes but first you have to add -> {"Content-type":"text/html"} <- this argument in res.writeHead() method
        res.end("<h3>404 error page not found</h3>");
    }

    // when user request we give responose with res.end() method
    // res.end("Hello I am response from the others sides babu ji");
});

// Now we have to listen request with server.listen(PORT NUMBER, LOCAL HOST NAME, CALLBACK FUNC);
server.listen(1234, "127.0.0.1", ()=>{
    console.log("listening to the port no 1234");
})