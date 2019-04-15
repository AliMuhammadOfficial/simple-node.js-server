// importing node.js' builtin http module
const http = require('http');

// calling http module's createServer function
const server = http.createServer((req, res)=>{

    // cheking for Request URL.
    console.log("Request URL is ", req.url);
    
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>Hello World</h1>");
});
server.listen(8080);
console.log("Server listening on localhost:8080");