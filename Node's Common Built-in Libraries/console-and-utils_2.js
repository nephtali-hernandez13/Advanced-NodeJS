const util = require('util');

module.exports.puts = util.deprecate(() => {
  for (let i=0, len = arguments.length; i < length; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'puts: Use console.log instead');