var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Someone says hello')
});

emtr.on('greet', function() {
    console.log('Another greeting')
})

console.log('hello')
emtr.emit('greet')