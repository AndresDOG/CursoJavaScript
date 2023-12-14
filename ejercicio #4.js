/*En este desafío vas a recibir un objeto car como parámetro de la función solution.
Este objeto puede contener diferentes propiedades.
 Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene,
 devuelve el objeto original con la propiedad drivingLicense como true. 
 Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.*/

let car1 = {
    marca: `Mazda`,
    modelo: `Mazda CX-5`,
    color: `Rojo`,
    licensePlate: `LHP-038`,
    
}
let car2 = {
    marca: `Mazda`,
    modelo: `Mazda X`,
    color: `Azul`,
    
}

function solution(car){
    if(`licensePlate` in car) {
        car.drivingLicense = true;
    } else {
        car.drivingLicense = false;
    }
    return car;
}
console.log(solution(car1)); 
console.log(solution(car2));