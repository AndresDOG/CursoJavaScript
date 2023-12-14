// nos ayuda a transfomrar un array de arrays en objetos
// El método Object.fromEntries devuelve un objeto a partir 
// de un array donde sus elementos son las entries en forma 
// [propiedad, valor].

const entries = new Map([
  ["name", "oscar"],
  ["age", 34],
]);
console.log(entries);
console.log(Object.fromEntries(entries));