var http = require('http'); //include http.js module
var dt = require('./first_module'); //include first_module.js module
var url = require('url') //include url.js module
var fs = require('fs') //include fs.js module

//create a server object:
http.createServer(function (req, res) {
	
  // res.writeHead(200, {'Content-Type': 'text/html'}); //write a response head
  // res.write('Hello World! This is from NodeJS!!!\n' + dt.myDateTime()); //write a response to the client
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + ' ' + q.month;
  // res.write(txt);
  // res.end(); //end the response
  
  fs.readFile('demofile1.html', function(err, data){
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(data);
	  return res.end();
  });
  
  //Create file
  // fs.appendFile('mynewfile1.txt','Hello content!', function(err){
	  // if(err) throw err;
	  // console.log('Saved!');
  // });
  
  // fs.open('mynewfile2.txt','w', function(err, file){
	  // if(err) throw err;
	  // console.log('Saved!');
  // });
  
  // fs.writeFile('mynewfile3.txt','Hello content!', function(err){
	  // if(err) throw err;
	  // console.log('Saved!');
  // });
  
  //Update file
  // fs.appendFile('mynewfile1.txt',' This is my text.', function(err){
	  // if(err) throw err;
	  // console.log('Updated!');
  // });
  
  // fs.writeFile('mynewfile3.txt','This is my text.', function(err){
	  // if(err) throw err;
	  // console.log('Updated!');
  // });
  
  //Delete file
  // fs.unlink('mynewfile2.txt', function(err){
	  // if(err) throw err;
	  // console.log('File deleted!');
  // });
  
  //Rename file
  // fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
	  // if(err) throw err;
	  // console.log('File renamed!');
  // });
  
	// var url = require('url');
	var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
	var q = url.parse(adr, true);

	console.log(q.host); //returns 'localhost:8080'
	console.log(q.pathname); //returns '/default.htm'
	console.log(q.search); //returns '?year=2017&month=february'

	var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	console.log(qdata.month); //returns 'february'
	
	
  
}).listen(8889); //the server object listens on port 8889
