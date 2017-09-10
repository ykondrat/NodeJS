const events = require('events').EventEmitter;
const em = new events();

em.setMaxListeners(20); //default 10

for (let i = 0; i < 11; i++) {
    em.on('event', function(){
        console.log(i);
    });
}

console.log(`em has ${em.listenerCount('event')} listeners`);

em.emit('event');
