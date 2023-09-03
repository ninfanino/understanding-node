var fs = require('fs');
var zlib = require('zlib') // crear zip

// si no se pasa la opcion de encoding va a devolver la data binaria
// // sincrono
// var greet = fs.readFileSync(__dirname + '/greet.tsx', 'utf-8');
// console.log(greet);

// // asincrono
// var greet2 = fs.readFile(__dirname + '/greet.tsx', 'utf-8', function(err, data) {
//     console.log(data)
// });

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf-8',
    highWaterMark: 32 * 1024, // el numero de bytes que queremos que mida el buffer
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')
// si la data es mas grande que el buffer, se van a obtener "chunks", piezas de informacion del tamano del buffer y va a estar iterando
// readable.on('data', function(chunk) {
//     console.log(chunk)
//     writable.write(chunk)
// })

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// crea un 'transform stream' (readable and writable)
var gzip = zlib.createGzip();

// pipe recibe como parametro el destino
readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
