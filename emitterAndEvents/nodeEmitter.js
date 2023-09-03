var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Someone says hello')
});

emtr.on(eventConfig.GREET, function() {
    console.log('Another greeting')
})

console.log('hello')
emtr.emit(eventConfig.GREET)
