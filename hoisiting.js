// Hositing es basicamente cuando hacemos un llamado de una variable o una funcion , antes de que esta haya sido declarada e inicializada
// Javascript al no ver que esta declarada , el la declara como Undefined
// Ej

console.log(modelodeCarro);

let modeloDeCarro = "2019";

//R= No esta denifida

// En cuanto a las funciones

hey();

function hey() {
  console.log("Hola " + nombre);
}

var nombre = "Andres Olea";

/*Usando var:
javascript
*/
hey(); // Esto imprimirá "Hola undefined" en la consola

function hey() {
  console.log("Hola " + nombre);
}

var nombre = "Andres Olea";
//Debido al hoisting, el código se comporta como si estuviera estructurado así:

//javascript hace esto cuando usas una var y se genera el hoisting

var nombre; // nombre es declarada pero no está inicializada (es decir, tiene un valor de 'undefined')

hey(); // Esto imprimirá "Hola undefined" en la consola

function hey() {
  console.log("Hola " + nombre);
}

nombre = "Andres Olea";
/*Usando let:
Si reemplazas var por let en tu código:

javascript
*/
hey(); // Esto generará un error: Cannot access 'nombre' before initialization

function hey() {
  console.log("Hola " + nombre);
}

let nombre = "Andres Olea";
