var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = app.listen(server_port, function () {

  var host = server_ip_address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

})