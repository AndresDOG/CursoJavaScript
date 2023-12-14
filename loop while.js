/* Este ciclo lo que hace es que mientras la longitud del array sea mayor a 0 ,
 va declarar que una variable va ser igual a un array.shift(),
  que elimina los elementos al inicio del array*/

let estudiantes = ["Maria", "Pedro", "Jose", "Andres"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  let estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
