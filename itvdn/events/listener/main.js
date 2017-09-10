let count = 0;

const print = () => {
    count++;
    console.log(`Click - ${count}\n`);
}
const events = require('events');
const emmiter = new events.EventEmitter();

emmiter.on('click', print);

emmiter.addListener('click', print);

emmiter.once('click', print);

emmiter.emit('click');
emmiter.emit('click');
