const events = require('events').EventEmitter;
const em = new events();

em.on('click', function(){
    console.log('ord func');
    console.log(this);
})

exports.x = 10;
em.on('click', () => {
    console.log('arr func');
    console.log(this);
})

em.emit('click');
