const http = require('http');
http.createServer((req, res) => {
    res.write('Hello from ECS!');
    res.end();
}).listen(3000);
