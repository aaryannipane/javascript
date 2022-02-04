// Node.js Web server

// What is web server?
/* To access web pages of any web application, you need a web server.
The web server will handle all the http requests for the web application */
/* Eg:- IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web
applications*/
/* Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously.
You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server */

// ____________________________________________________ START ______________________________________________________

// The http.createServer() method includes requests and response parameters which is supplied by Node.js.
// The request Object can be used to get information about the current HTTP request eg:- url, request header, and data.
// The response Object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML, You should include an HTTP header with the correct content type:

const http = require("http");
const server = http.createServer((req, res) => {
  // when user request we give responose with res.end() method  end is for the end of response 
  res.end("Hello I am response from the others sides babu ji");
});

// Now we have to listen request with server.listen(PORT NUMBER, LOCAL HOST NAME, CALLBACK FUNC);
server.listen(1234, "127.0.0.1", ()=>{
    console.log("listening to the port no 1234");
})



// Watch video on Youtebe :- https://www.youtube.com/watch?v=9DEW7eXEOWI&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=16
