// function Person (name,lastname,edad) {
//     this.name =name;
//     this.lastname=lastname;
//     this.edad=edad;

// }

// const person = new Person("Andres david", "Olea Guzman", 20);
// console.log(`el nombre de esta persona es ${person.name} ${person.lastname}`);

class Person2 {
  constructor(name, lastname, edad) {
    this.name = name;
    this.lastname = lastname;
    this.edad = edad;
  }
  fullname() {
    return `${this.name} ${this.lastname}`;
  }
}

const person = new Person2("Andres david", "Olea Guzman", 20);
console.log(person);
// console.log(`el nombre de esta persona es ${person.name} ${person.lastname}`);

class Celular {
  constructor(name, ram, model) {
    let reportes = [];
    this.name = name;
    this.ram = ram;
    this.model = model;
    this.getMostrar = () => {
      return reportes;
    };
    this.addReporte = (nameReporte) => {
      reportes.push(nameReporte);
    };
    this.addRam = (newRam) => {
      return newRam = ram
    }
  }
}

let samsumgA50 = new Celular("Samsung A50", "16GB", "2021");

samsumgA50.addReporte({name:"Reporte de telefonos"});
console.log(samsumgA50.getMostrar());
samsumgA50.addRam("32GB")
console.log(samsumgA50);
