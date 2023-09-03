var obj = {
    name: 'John doe',
    greet: function(param, param2) {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
// Call ejecuta la funcion, pero lo que se pasa entre parentesis sera el 'This'
obj.greet.call({ name: 'Jane Doe'}, param, param2)

// Igual que el call, la diferencia es como se pasan los parametros, 
obj.greet.apply({ name: 'Jane Doe'}, [param, param2])