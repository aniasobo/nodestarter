var http = require("http"); // this module ships with Node.js

function onRequest(request, response) { // req and resp are objects with methods
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequest).listen(8888);

console.log("Server has started.")