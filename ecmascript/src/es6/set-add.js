//  Set es una nueva estructura de datos para almacenar elementos
//   únicos, es decir, sin elementos repetidos.

// add(value): añade un nuevo valor.
// delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
// has(value): retorna un booleano si existe o no el valor dentro del Set.
// clear(value): elimina todos los valores del Set.
// size: retorna la cantidad de elementos del Set.

const list = new Set();

list.add('item1');
list.add('item2').add('item3');


console.log(list);
console.log(Object.entries(list));