// Nos permite saber cuando realmente termina nuestra promesa

const anotherFunciont = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("Heyy!!");
      } else {
        reject("Whopps!!");
      }
    });
  };
  
  anotherFunciont()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnaly'));