let Consolas = [];

function Consola(marca, modelo, color, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.annio = annio;
}

for (let i = 0; i < 3; i++) {
  let marca = prompt("Ingresa la marca de tu consola: ");
  let modelo = prompt("Ingresa el modleo de tu consola: ");
  let color = prompt("Ingresa el color de tu consola: ");
  let annio = parseInt(prompt("Ingresa el annio de tu consola: "));

  let consola = new Consola(marca, modelo, color, annio);

  Consolas.push(consola);
}

console.log(Consolas);

