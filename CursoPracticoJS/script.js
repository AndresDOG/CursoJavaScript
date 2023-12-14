const titulo = document.querySelector(".titulo");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
const header = document.querySelector("header");
const img = document.createElement("img");

console.log({
  header,
  titulo,
  p,
  parrafito,
  pid,
  input,
});

//Para modificar o ingresar el contenido de nuestras etiquetas en html
titulo.innerHTML = "Te la creiste carnal";
p.innerText = "Con este solo podemos ponerlo en texto";

//Para modificar los atributos de nuestros elementos en html
//GetAttribute para ver lo que contiene , o traerlo
//SetAttribute para modificar ese atributo , recibe 2 paramatros el atributo y el contenido del atributo
console.log(p.getAttribute("class"));
parrafito.setAttribute("class", "parrafon");
console.log(parrafito.getAttribute("class"));

//Para modificar los atributos especifamente de las class
//Validar atributos de clase .contains devuelve false o true

parrafito.classList.add("peque");
console.log(parrafito.getAttribute("class"));
parrafito.classList.remove("peque");
console.log(parrafito.getAttribute("class"));
console.log(parrafito.classList.contains("parrafon"));

input.value = "12234";

// Para crear un nuevo elemento
console.log(document.createElement("img"));
img.setAttribute("src", "./mariotrabao.jpg");
console.log(img);

// Para remplazar el contenido de un elemento por otro
//pid.replaceWith(img);

//Para agregar contenido a un elemento
pid.append(img);
