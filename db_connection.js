var mysql = require('mysql');
// var postgres = require('postgres');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "CREATE DATABASE nodedb"; //for create database
  //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"; //for create table DROP TABLE IF EXISTS customers; 
  // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255));"; //create table with pkey ans auto increment
  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"; //single rinsert
  
  //insert multiple rows 
  /*
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    // console.log("1 record inserted");
	console.log("Number of records inserted: " + result.affectedRows);
  }); */
  
  //return id after insert a row
  /*
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  }); */
  
  //select all row data
  /*
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result); 
  }); */
  
  // select limited columns
  /*
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    console.log(result[2].address);
    console.log(fields[1].name);
  }); */
  
  //select with where clouse
  /*
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); */
  
  //wild card search
  /*
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); */
  
  //Escape query values by using the mysql.escape() method:
  /*
  var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log(result);
	}); */
	
// Escape query values by using the placeholder ? method:
/*
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ?';
	con.query(sql, [adr], function (err, result) {
	  if (err) throw err;
	  console.log(result);
	}); */
	
	//Multiple placeholders:
	/*
	var name = 'Amy';
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
	con.query(sql, [name, adr], function (err, result) {
	  if (err) throw err;
	  console.log(result);
	}); */
	
	//using order by
	/*
	con.query("SELECT * FROM customers ORDER BY name desc;", function (err, result) {
		if (err) throw err;
		console.log(result);
	  }); */
  
});