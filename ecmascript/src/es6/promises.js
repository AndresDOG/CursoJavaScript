const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve("Hey!!!");
    } catch (error) {
      reject(error.message);
    }
  });
};

anotherFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

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
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
