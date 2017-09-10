const events = require('events').EventEmitter;
const em = new events();

em.on('event', function(a, b) {
    console.log(a, b);
});

em.emit('event', 10, 15);
