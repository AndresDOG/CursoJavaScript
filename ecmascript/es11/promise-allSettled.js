const promesa1 = Promise.resolve("Éxito");
const promesa2 = Promise.reject("Error");
const promesa3 = new Promise((resolve) => setTimeout(() => resolve("Otra promesa exitosa"), 1000));

Promise.allSettled([promesa1, promesa2, promesa3])
  .then((resultados) => {
    resultados.forEach((resultado, index) => {
      if (resultado.status === "fulfilled") {
        console.log(`Promesa ${index + 1} resuelta con resultado:`, resultado.value);
      } else {
        console.log(`Promesa ${index + 1} rechazada con razón:`, resultado.reason);
      }
    });
  });
