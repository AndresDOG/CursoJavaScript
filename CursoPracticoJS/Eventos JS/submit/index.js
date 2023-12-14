const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//Este evento de submit se utiliza para formularios donde la funcion recibe
//al evento y para que no se recargue la url , se aplicar preventDefault()

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  console.log({ event });
  event.preventDefault();
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;

  console.log(pResult);
}
