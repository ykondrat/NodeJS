const events = require('events').EventEmitter;
const em = new events();

let count = 0;

em.on('newListener', function(event, listener){
    if (event == 'myEvent') {
        console.log('myEvent added to em');
    }
});

em.on('removeListener', function(event, listener) {
    if (event == 'myEvent') {
        console.log('myEvent removed from em');
    }
});


em.on('myEvent', test);

console.log(em.listenerCount('myEvent'));

em.removeListener('myEvent', test);
console.log(em.listenerCount('myEvent'));

function test(){
    console.log('test event');
}
