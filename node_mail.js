// var http = require('http');
var nodemailer = require('nodemailer');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var transporter = nodemailer.createTransport({
  service: 'gmail',
  // secure: false,
  auth: {
    user: 'service.osms@gmail.com',
    pass: 'OsMs@Service#'
  }
});

var mailOptions = {
  from: 'service.osms@gmail.com',
  to: 'liton.ust@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});