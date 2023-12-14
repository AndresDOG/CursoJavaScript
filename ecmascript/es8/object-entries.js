const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
console.log(Object.entries(countries));

// Permite transformar un objecto a array 
// Aparte nos muestra las propiedades y el valor 
const objeto = { a: 1, b: 2, c: 3 };

for (const [clave, valor] of Object.entries(objeto)) {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
}