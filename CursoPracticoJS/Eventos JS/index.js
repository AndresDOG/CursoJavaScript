const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");
const btnMulti = document.querySelector("#btnMultiplicar");
const btnDiv = document.querySelector("#btnDividir");
const pResult = document.querySelector("#result");

//el AddEventListener nos permite agregar un escuchar de eventos , en este caso un click
//otra forma seria agregar un OnClick en el html y se llama a la funcion 
btnSumar.addEventListener("click", Sumar);
btnRestar.addEventListener("click", Restar);
btnMulti.addEventListener("click", Multiplicar);
btnDiv.addEventListener("click",Div);

function Sumar() {
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerHTML = "Resultado: " + sumaInputs;
}

function Restar() {
  const restaInputs = Number(input1.value) - Number(input2.value);
  pResult.innerHTML = "Resultado: " + restaInputs;
}

function Multiplicar() {
  const multiInputs = Number(input1.value) * Number(input2.value);
  pResult.innerHTML = "Resultado: " + multiInputs;
}

function Div() {
  const divInputs = Number(input1.value) / Number(input2.value);
  pResult.innerHTML = "Resultado: " + divInputs;
}
