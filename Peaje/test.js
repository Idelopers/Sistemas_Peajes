var http = require('http');
var dt = require('./modulo1.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Esta hora tiene su hora actual: " + dt.myDateTime());
    res.end();
}).listen(80);
