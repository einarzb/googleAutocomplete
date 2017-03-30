//  packages & modules  >
var express = require('express');
var https = require('https'); //already in express lib
var bodyParser = require('body-parser');
var app = express();

//  middleware  >
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));


//  run server
app.listen(8000, function() {
  console.log("autocomplete is on air 8000")
});

//fake ssl
//
// var privateKey = fs.readFileSync( 'privatekey.pem' );
// var certificate = fs.readFileSync( 'certificate.pem' );
// var port = 8000;
//
// https.createServer({
//     key: privateKey,
//     cert: certificate
// }, app).listen(port);
