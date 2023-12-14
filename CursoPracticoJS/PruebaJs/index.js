/*Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

let DineroAhorrado = 10000;
let Deudas = 3000;
let calcularDinero = DineroAhorrado - Deudas;

console.log(
  nombre_Completo + " " + "Su dinero total es : " + " " + calcularDinero
);

/*Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/

let nombre = "Juan David";
let apellido = "Castro Gallego";
let nickname = "JuanDC";

function completar(nombre, apellido, nickname) {
  let completarNombre = nombre + " " + apellido;
  return (
    "Mi Nombre es : " +
    " " +
    completarNombre +
    " " +
    "Pero prefiero que me digas" +
    " " +
    nickname +
    "."
  );
}

console.log(completar(nombre, apellido, nickname));

/*Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}*/

let tipoDeSuscripcion = "";

function ComprobarSuscripcion(tipoDeSuscripcion) {
  if (tipoDeSuscripcion === "Basic") {
    return "Puedes Tomar casi todos los cursos de platzi durante un mes";
  } else if (tipoDeSuscripcion === "Free") {
    return "Solo puedes tomar los cursos gratis";
  } else if (tipoDeSuscripcion === "Expert") {
    return "Puedes tomar casi todos los cursos de Platzi durante 365 dias";
  } else if (tipoDeSuscripcion === "ExpertPlus") {
    return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
  } else {
    return "No tienes nigun tipo de Subscripcion";
  }
}

console.log(ComprobarSuscripcion("Basic"));

/*Replica el comportamiento de tu condicional anterior con if,
 else y else if, pero ahora solo con if (sin else ni else if).*/

let tiposDeSuscripcion = "";

function ComprobarSuscripciones(tiposDeSuscripcion) {
  if (tiposDeSuscripcion === "Basic") {
    return "Puedes Tomar casi todos los cursos de platzi durante un mes";
  }

  if (tiposDeSuscripcion === "Free") {
    return "Solo puedes tomar los cursos gratis";
  }

  if (tiposDeSuscripcion === "Expert") {
    return "Puedes tomar casi todos los cursos de Platzi durante 365 dias";
  }

  if (tiposDeSuscripcion === "ExpertPlus") {
    return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
  }

  console.warn("Esta Subcrispcion No exite");
}

console.log(ComprobarSuscripciones(tiposDeSuscripcion));

/* Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional*/
const tiposDeSubcripciones = {
  Free: "Solo Puedes tomar los cursos gratis",
  Basic: "Solo Puedes tomar los cursos durante un mes",
  Expert: "Puedes tomar todos los cursos durante un ano",
  ExpertDuo: "Tu y alguien mas puede tomar todos los cursos por un ano",
};

function comprobarSub(Subscripcion) {
  if (tiposDeSubcripciones[Subscripcion]) {
    return console.log(tiposDeSubcripciones[Subscripcion]);
  }

  console.warn("Esta subscripcion no existe");
}

console.log(comprobarSub(Subscripcion));

/*Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}*/
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + " " + i);
  i++;
}

let a = 10;
while (a >= 2) {
  console.log("El valor de i es: " + " " + a);
  a--;
}

/*Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.*/

let resultado = 4;

function preguntarusuario() {
  let respuesta = parseInt(prompt("¿Cuánto es 2 + 2?"));

  while (respuesta !== resultado) {
    respuesta = parseInt(
      prompt("Incorrecto. Vuelve a intentar. ¿Cuánto es 2 + 2?")
    );
  }
  return "Felecitaciones, Es la respuesta correcta";
}

console.log(preguntarusuario());

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let Estudiantes = ["Andres", "Maria", "Jose", "Miguel"];

function ListarEstudiante(Estudiantes) {
  console.log(Estudiantes[0]);
}

console.log(ListarEstudiante(Estudiantes));

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let Juegos = ["GTA V", "FIFA 23", "Far Cry", "Assasins Creed"];

function presentarJuegos() {
  for (let i = 0; i < Juegos.length; i++) {
    let imprimir = Juegos[i++];
    return imprimir;
  }
}

console.log(presentarJuegos());

function imprimirElementosDelArray(array) {
  for (let elemento of array) {
    console.log(elemento);
  }
}

let juegs = ["Assasins Creed", "GTA V ", "Apex Legends", "Far Cry"];
imprimirElementosDelArray(juegs);

function imprimirElementosDelArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let jugos = ["Assasins Creed", "GTA V ", "Apex Legends", "Far Cry"];
imprimirElementosDelArray(jugos);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).\
function imprimirElementosDelObjeto(objeto) {
  for (let propiedad in objeto) {
    console.log(`Propiedad: ${propiedad}, Valor: ${objeto[propiedad]}`);
  }
}

let persona = {
  nombre: "Juan",
  edad: 25,
  ocupacion: "Desarrollador",
};

imprimirElementosDelObjeto(persona);

// Usar Object.keys junto con forEach:
// Object.keys devuelve un array de las propiedades (o claves) del objeto. Luego puedes usar el método forEach de los arrays para iterar sobre esas propiedades.

function imprimirElementosDelObjeto(objeto) {
  Object.keys(objeto).forEach((propiedad) => {
    console.log(`Propiedad: ${propiedad}, Valor: ${objeto[propiedad]}`);
  });
}
// Usar Object.entries:
// Object.entries devuelve un array de arrays, donde cada sub-array tiene dos elementos: la primera posición contiene la propiedad y la segunda posición contiene el valor. Es útil si quieres trabajar tanto con la propiedad como con el valor en cada iteración.

function imprimirElementosDelObjeto(objeto) {
  Object.entries(objeto).forEach(([propiedad, valor]) => {
    console.log(`Propiedad: ${propiedad}, Valor: ${valor}`);
  });
}
// Usar Object.values:
// Si solo estás interesado en los valores y no en las propiedades, puedes usar Object.values, aunque en tu caso específico, quieres ambos (propiedades y valores). Sin embargo, lo menciono por si es de interés:

function imprimirValoresDelObjeto(objeto) {
  Object.values(objeto).forEach((valor) => {
    console.log(`Valor: ${valor}`);
  });
}
