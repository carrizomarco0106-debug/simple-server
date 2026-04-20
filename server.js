const http = require('http');
http.createServer((req, res) => {
    res.write('Testing CI/CD pipeline');
    res.end();
}).listen(3000);
