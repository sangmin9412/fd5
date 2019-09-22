const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('hi');
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

    const userAgent = req.headers['user-agent'];
    fs.appendFile('log.txt', userAgent + '\n', () => {});
    res.end(userAgent);
}).listen(8080, () => {
    console.log('listening!!!');
});
