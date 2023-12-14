const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "CiudadX",
    decirHola: function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
  
  console.log(persona.nombre);  // Imprimirá "Juan"
  console.log(persona.edad);    // Imprimirá 30
  persona.decirHola();           // Imprimirá el mensaje definido en el método decirHola

  
  
const nombre = "Juan";
const edad = 30;

const persona2 = {
  nombre, // Equivalente a nombre: nombre
  edad   // Equivalente a edad: edad
};