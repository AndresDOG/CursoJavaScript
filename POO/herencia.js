class User {
    constructor(nombre,apellido,cedula,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
    }
}

class Conductor extends User {
    constructor(nombre,apellido,cedula,edad,licencia){
        super(nombre,apellido,cedula,edad,licencia)
        this.licencia = licencia;
    }
}

const jaime = new Conductor("Jaime","Gonzales",1001946397,23,"C1");

console.log(jaime);