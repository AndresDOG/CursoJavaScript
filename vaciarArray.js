//Asignar un Nuevo Array Vacío

let miArray = [1, 2, 3, 4, 5];
miArray = [];


//Usar la Propiedad length:
let miArray2 = [1, 2, 3, 4, 5];
miArray.length = 0;

//Método splice:
//El método splice puede usarse para eliminar elementos desde una posición específica (0 en este caso) hasta la longitud del array.
let miArray3 = [1, 2, 3, 4, 5];
miArray.splice(0, miArray.length);

//Método pop en un Bucle:
//Utilizar el método pop en un bucle hasta que la longitud del array sea 0
let miArray4 = [1, 2, 3, 4, 5];
while (miArray.length) {
  miArray.pop();
}

