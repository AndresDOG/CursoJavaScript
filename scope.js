/* Existen 2 tipos: Scope global y scope local 
// La diferencia es que el global puede acceder al local 
, pero el local no puede ser usado en el global
Ej
*/

var nombre = "Andres David";

function completarNombre() {
  var apellido = " Olea Guzman";
  return nombre + " " + apellido;
  console.log(completarNombre());
}

// Si yo llamo a  nombre Me lo va a mostrar , pero si llamo al apellido en el global , no lo va encontrar , lo cual va decir undefined

const estudiante = "Jaime Perez";

function asignarCurso() {
  const curso = "Ing. Sistemas";

  return `Hola ${estudiante} bienvenido al curso de ${curso}`;
  console.log(asignarCurso());
}
