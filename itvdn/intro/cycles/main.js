console.log('main module');

var a = require('./testa');
var b = require('./testb');

console.log(a.done, b.done);
