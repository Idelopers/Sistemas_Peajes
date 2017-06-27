var http = require('http');
var dts = require('./modulo1.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dts.myDateTime());
    res.end();
}).listen(80);



