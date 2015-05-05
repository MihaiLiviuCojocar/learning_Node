var fs   = require('fs');
var http = require('http');

http.createServer(function(request, response) {

  var newFile = fs.createWriteStream("nissanGTR_copy.jpg");
  var fileBytes = request.headers["content-length"];
  var uploadedBytes = 0;

  request.pipe(newFile);

  request.on('data', function(chunk) {
    uploadedBytes += chunk.length;
    var progress = (uploadedBytes / fileBytes) * 100;
    response.write("progress: " + parseInt(progress, 10) + "%\n");
  });

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');
