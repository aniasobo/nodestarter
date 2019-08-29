function start() {
  console.log("Request handler START was called");
}

function upload() {
  console.log("Request handler UPLOAD was called")
}

exports.start = start;
exports.upload = upload;