//const http = require('http'); // HTTP
const https = require('https'); // HTTPs

//const req = http.request( // HTTP
  // req: http.ClientRequest
  const req = https.get( // HTTPs
  //{ hostname: 'www.google.com' }, // HTTP
  'https://www.google.com', // HTTPS
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode)
    console.log(res.headers);
    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.on('error', (e) => console.log(e)); // http.Agent
req.end();