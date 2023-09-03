// var buf = new Buffer('Hello', 'utf-8');
// console.log(buf);
// console.log(buf.toString())
// console.log(buf.toJSON())
// console.log(buf[2])

// // Bufer tiene espacio limitado, asi que al usar el write empieza a sobreescribir la data inicial
// buf.write('wo');
// console.log(buf.toString()) // wollo

var buf = new ArrayBuffer(8);
var view = new Int32Array(buf);
view[0] = 5;
view[1] = 15;
console.log(view)
