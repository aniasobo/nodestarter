var http = require("http"); // this module ships with Node.js
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) { // req and resp are objects with methods
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + "received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received post data chunk '" + postDataChunk + "'. ");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
    
  }

http.createServer(onRequest).listen(8888);
console.log("Server has started.")
}

exports.start = start;