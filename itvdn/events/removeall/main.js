const events = require('events').EventEmitter;
const em = new events();

em.on('click', () => {
    console.log('click - 1');
})

em.on('click', () => {
    console.log('click - 2');
})

em.emit('click');

em.removeAllListeners('click');
console.log('clicks was deleted');

em.emit('click');
