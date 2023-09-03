// var greet = require('./greet');
// greet.spanish()
// greet.english();

// var greet = require('./greet1');
// greet();

// var greet2 = require('./greet12');
// greet2.greet();

// var greet2 = require('./greet12').greet;
// greet2()

// var greet3 = require('./greet3');
// greet3.greet();
// greet3.greeting = 'Changed hello world';

// var greet3b = require('./greet3');
// greet3b.greet()

// var Greet4 = require('./greet4');
// var grr = new Greet4();
// grr.greet()

// var greet5 = require('./greet5');
// greet5.greet()

// var greet6 = require('./greet6');
// greet6.greet()


// native module
var util = require('util');
var name = 'John';
var greeting = util.format('Hello, %s', name);
console.log(greeting)