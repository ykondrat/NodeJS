const events = require('events').EventEmitter;
const emitter = new events();

emitter.on('event', function() {
    setImmediate(() => {
        console.log('listener 1');
    });
});

emitter.on('event', function(){
    console.log('listener 2');
});

emitter.on('event', function(){
    setImmediate(() => {
        console.log('listener 3');
    });
});

emitter.emit('event');
