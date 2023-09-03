// PROTOTYPE
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var john = new Person('John', 'Doe');
console.log(john.firstName)
john.greet()

// OBJECT CREATE
var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName
    }
}

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

var jane = Object.create(person);
jane.firstName = 'Jane';
jane.lastName = 'Doe';

console.log(john)
console.log(jane.greet())