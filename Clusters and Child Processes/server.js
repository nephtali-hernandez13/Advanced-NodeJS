const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    // const sum = longComputation();
    // return res.end(`Sum is ${sum}`);
    const compute = fork('compute.js')
    compute.on('message', sum => {
      res.end(`Sum is ${num}`);
    });
  } else {
    res.end('Ok');
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));