// arrays desctructuring

let fruits = ["apple", "Banana", "cereza"];
let [a, b, c] = fruits;

let imprimir = `${fruits} estas son todas las frutitas!`;
console.log(imprimir);

//object destructuring

let user = { username: "Oscar", age: 22 };
let { username, age } = user;
console.log(username, age);
