// declarando
class User {}

//instancia de una clase
// const newUser = new User();

class user {
  //Metodos

  gretting() {
    return "Hello";
  }
}

const andreso = new user();
console.log(andreso.gretting());
const miguel = new user();
console.log(miguel.gretting());

//constructor

class user {
  //Contrusctor
  constructor() {
    console.log("Nuevo usuario");
  }

  gretting() {
    return "Hello";
  }

  
}

const david = new user();

// this

class user {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  speak() {
    return "Hello";
  }

  greeting(){
    return `${this.speak()} ${this.name}`
  }

  from() {
    return "You are from "
  }

  GreetingFull(){
    return `${this.greeting()} ${this.from()} ${this.country}`
  }
}

const ana = new user('Ana',2,'Medellin');
console.log(ana.GreetingFull());
