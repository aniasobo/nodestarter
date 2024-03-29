var http = require("http"); // this module ships with Node.js
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) { // req and resp are objects with methods
    var pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + "received.");
    route(handle, pathname, response, request);
  }

http.createServer(onRequest).listen(8888);
console.log("Server has started.")
}

exports.start = start;