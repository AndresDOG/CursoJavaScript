// javascript al ser un lenguaje de bajo tipado
// Presenta esta coersion que lo que hace es que nos ayuda a cambiar el tipo de un dato,
// en  que  caso que necesitamos

//Ej Coercion inplicita

4 + "9"; // 49 , Concatena el numero con el string
4 * "9"; //36 , Aqui realiza la coersion , cambia el dato a un numero para realizar la operacion

// Coercion Explicita
// Cuando nosotros queremos obligar a camibiar un tipo de dato
//Ej

var a = 30;
var b = String(a);
console.log(b);
var c = Number(b);
console.log(c);
