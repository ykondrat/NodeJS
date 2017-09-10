const read = require('./read');

const reader = new read.Reader();

reader.readData('file.js', (res)=>{
    console.log(res);
});
