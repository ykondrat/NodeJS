console.log('b loading');

exports.done = false;

var a = require('./testa');
console.log('in b testa is ', a.done);

exports.done = true;

console.log('a ready');
