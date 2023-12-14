const persona = {
    nombre: "Juan",
    trabajo: {
      titulo: "Desarrollador",
      empresa: {
        nombre: "TechCorp",
        ubicacion: {
          ciudad: "CiudadX",
          pais: "PaísY"
        }
      }
    }
  };

  //Antes de optional chaining, podrías intentar acceder a la propiedad de la siguiente manera:
  const ciudad = persona && persona.trabajo && persona.trabajo.empresa && persona.trabajo.empresa.ubicacion && persona.trabajo.empresa.ubicacion.ciudad;

  const ciudad2 = persona?.trabajo?.empresa?.ubicacion?.ciudad;
console.log(ciudad);
console.log(ciudad2);