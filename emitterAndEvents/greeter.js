'use strict';

var Emitter = require('events');

module.exports = class Greeter extends Emitter  {
    constructor() {
        super();
        this.greeting = 'Hello world!'
    }

    greet(data) {
        console.log(`${this.greeting} + ${data}`)
        this.emit('greet', data)
    }
}