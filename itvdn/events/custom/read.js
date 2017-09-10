const events = require('events');

function readFile() {
    this.file = '';
}

readFile.prototype = new events.EventEmitter();

readFile.prototype.readData = function (path, callback) {
    this.file = path;

    if (typeof callback == 'function') {
        this.on('readData', callback);
    }
    this._read();
}

readFile.prototype._read = function() {
    console.log('...loading');
    const someData = 'Text from file';
    console.log('Data was read');
    this.emit('readData', someData);
}

module.exports.Reader = readFile;
