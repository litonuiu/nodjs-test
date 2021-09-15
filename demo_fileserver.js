var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write(uc.upperCase('Hello World!'));
    return res.end();
  });
  
  var eventEmitter = new events.EventEmitter();

	//Create an event handler:
	var myEventHandler = function () {
	  console.log('I hear a scream!');
	}

	//Assign the event handler to an event:
	eventEmitter.on('scream', myEventHandler);

	//Fire the 'scream' event:
	eventEmitter.emit('scream');
	
	var rs = fs.createReadStream('./mynewfile3.txt');
	rs.on('open', function () {
	  console.log('The file is open');
	});
  
}).listen(8889);


