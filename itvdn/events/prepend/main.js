const events = require('events').EventEmitter;
const em = new events();

em.on('click', function(){
    console.log('test 1');
});

em.prependListener('click', function(){
    console.log('test 2');
});

em.once('once', function(){
    console.log('once 1');
});

em.prependOnceListener('once', function(){
    console.log('once 2');
});

em.emit('click');
em.emit('once');
