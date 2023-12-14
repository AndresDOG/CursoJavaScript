/*En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado"*/

function solution(article) {
  switch (true) {
    case article === "computadora":
      console.log("Con mi computadora puedo programar usando JavaScript");
      break;
    case article === "celular":
      console.log("En mi celular puedo aprender usando la app de Platzi");
      break;
    case article === "cable":
      console.log("¡Hay un cable en mi bota!");
      break;
    default:
      console.log("¡Hay un cable en mi bota!");
  }
}

// otra forma

let article = "";

function solution() {
  switch (article) {
    case "computadora":
      return "Con mi computadora puedo programar usando JavaScript";
    case "celular":
      return "En mi celular puedo aprender usando la app de Platzi";
    case "cable":
      return "¡Hay un cable en mi bota!";
    default:
      return "Articulo no encontrado";
  }
}
