const { spawn } = require('child_process');

//const child = spawn('pwd');
//const child = spawn('find', ['.', '-type', 'f']);
const child = spawn('find', ['homeuoes', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`Child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`Child stderr:\n${data}`);
});

child.on('exit', function(code, signal) {
  console.log(`Child process exited with code ${code}, signal ${signal}`);
});

// Other events on child: disconnect, error, message, close
// Stdio objects: child.stdin, child.stdout, child.stderr
