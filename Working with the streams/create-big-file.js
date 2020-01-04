const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<=1e6; i++) {
  file.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas repudiandae et tempora at ad, fuga quos non doloremque sequi ipsa rerum dolorem magni optio maxime nisi iste ratione eius!m');
}

file.end();