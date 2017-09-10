const events = require('events').EventEmitter;
const emitter = new events();

emitter.on('event', test);
console.log('listener add');

emitter.emit('event');

emitter.removeListener('event', test);
console.log('listener removed');

emitter.emit('event');

function test() {
    console.log('test function');
}
