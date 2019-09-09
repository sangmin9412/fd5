var http = require('http');

http.createServer(function(req, res) {
    console.log('hi');
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.end('안녕하세요11111');
}).listen(8080, function() {
    console.log('listening!!!');
});
