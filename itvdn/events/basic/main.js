const events = require('events');
const emmiter = new events.EventEmitter();

emmiter.on('click', ()=>{
    console.log('event click');
})

emmiter.emit('click');
