console.log('a loading');

exports.done = false;

var b = require('./testb');
console.log('in a testb is ', b.done);

exports.done = true;

console.log('a ready');
