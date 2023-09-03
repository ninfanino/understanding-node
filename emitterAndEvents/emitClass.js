'use strict';
var Greeter = require('./greeter');

var greeter1 = new Greeter();
greeter1.on('greet', function(data) {
    console.log('someone greeted: ' + data)
})

greeter1.greet('John');