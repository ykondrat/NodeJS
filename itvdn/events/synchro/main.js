const events = require('events').EventEmitter;
const emitter = new events();

emitter.on('event', function(){
    console.log('Listener 1');
});

emitter.on('event', function(){
    console.log('Listener 2');
});

emitter.on('event', function(){
    console.log('Listener 3');
});

emitter.emit('event');
