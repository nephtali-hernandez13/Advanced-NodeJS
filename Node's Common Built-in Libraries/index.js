const fs = require('fs');
const path = require('path');
const dirnmame = path.join(__dirname, 'files');

const files = fs.readFileSync(dirnmame);

files.forEach(file => {
  const filePath = path.join(dirnmame, file);
  fs.stat(filePath, (err, stats) => {
    if( err ) throw err;
    fs.truncate(filePath, stats.size/2, (err) => {
      if(err) throw err;
    });
  })
});