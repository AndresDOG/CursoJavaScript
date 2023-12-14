// Viene de ES5

// Nos permite transformar las propiedas de un objento 
// en un array 

const objeto = { a: 1, b: 2, c: 3 };

const propiedades = Object.keys(objeto);

console.log(propiedades);
// Salida: ['a', 'b', 'c']