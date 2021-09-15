var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv'); // require to move file

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {	
	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'D:/Resorce/NodeJS Tutorial/firstApp/fileUploads/' + files.filetoupload.name;
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
	});
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>File Upload Example in NodeJS<h1>');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8889);