const fs = require('fs');
const server = require('https').createServer({
  key: fs.readFileSync('./kem.pem'),
  cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');  
  /*
  setTimeout(function () {
    res.write('Another Hello world\n');
  }, 1000);

  setTimeout(function () {
    res.write('Yet Another Hello world\n');
  }, 2000);
  */
});

server.listen(443);