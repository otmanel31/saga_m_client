var express = require('express');
var path = require('path')
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/cordova/www/index.html'));
});

// launch server
const server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)

})