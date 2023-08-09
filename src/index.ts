import { createServer } from 'http';

const server = createServer((req, res) => {
    res.end('Hello world')
});

server.listen(() => {
    console.log('Running server')
});

