var Emitter = require('events');
var util = require('util');

function Greeter()  {
    // Emmitter es una function constructor, cuando se invoca con new 'this' apunta a un nuevo objeto vacio
    // al hacer esto, corre el constructor y le pasa el nuevo objeto vacio como parametro para agregar mas cosas al Greeter
    // equivalente al super constructor. Se asegura que todos los objetos creados de este contructor contiene todo lo que tenga emiter
    Emitter.call(this);
    this.greeting = 'Hello world!'
}

// discouraged
util.inherits(Greeter, Emitter);
Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data)
    this.emit('greet', data)
}

var greeter1 = new Greeter();
greeter1.on('greet', function(data) {
    console.log('someone greeted: ' + data)
})

greeter1.greet('John');