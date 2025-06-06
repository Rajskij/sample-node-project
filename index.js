// Part 2
//  node -e 'console.log(17 + 25)'
console.log('Hello World');

// Part 3
console.log('nodemon testing');

// Part 4
const http = require('http');
const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    console.log(req);
    switch (req.url) {
        case '/':
            res.write('Hello form main page\n');
            break;
        case '/user':
            res.write('Hello from user page\n');
            break;
        case '/test':
            res.write('Hello from test\n');
            break;
        default:
            res.statusCode = 404;
            res.write(`No page with path ${req.url}\n`);
            break;
    }
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
