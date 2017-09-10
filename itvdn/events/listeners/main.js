const events = require('events').EventEmitter;
const em = new events();

em.on('click', function(){
    console.log('1 listener');
});

em.on('click', function(){
    console.log('2 listener');
});

let listeners = em.listeners('click');

for (let i = 0; i < listeners.length; i++) {
    listeners[i]();
}
