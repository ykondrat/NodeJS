const events = require('events').EventEmitter;
const em = new events();

em.on('click', (err) => {
    console.log(err);
});

em.emit('click', new Error('test'));
