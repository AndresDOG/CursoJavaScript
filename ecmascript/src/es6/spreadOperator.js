// spread operator
//El operador de propagion , consiste en propagar los elementos de un iterable , ya se un array o string utilizando los (...)
let person = { name: "oscar", age: 28 };
let country = "MX";

let data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  return num + values[1];
}

console.log(sum(1, 2, 4, 4));
