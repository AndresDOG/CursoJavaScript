//Reasignar un Objeto Vacío:
let miObjeto = { nombre: "Juan", edad: 30, ciudad: "CiudadX" };
miObjeto = {};

//Usar el Método Object.keys y forEach:
//Utilizar Object.keys para obtener un array de las claves del objeto y luego usar forEach con delete para eliminar cada propiedad.
let miObjeto2 = { nombre: "Juan", edad: 30, ciudad: "CiudadX" };
Object.keys(miObjeto).forEach(key => delete miObjeto[key]);

//Usar el Operador Spread ({...}) con un Objeto Vacío:
//Utilizar el operador de propagación (...) con un objeto vacío ({}) para crear una copia superficial del objeto original sin propiedades.
let miObjeto3 = { nombre: "Juan", edad: 30, ciudad: "CiudadX" };
miObjeto = { ...miObjeto };

