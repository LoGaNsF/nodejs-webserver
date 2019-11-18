const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let result = {
        nombre: 'José Manuel',
        edad: 34,
        url: req.url
    };

    res.write(JSON.stringify(result));
    res.end();
}).listen(8080);

console.log('Listen on port 8080...');