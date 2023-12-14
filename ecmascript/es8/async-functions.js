const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};


const anotherFn = async () => {
    try {
      const something = await fnAsync();
      console.log(something);
      console.log('Hello!!');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

console.log('Before');
anotherFn();
console.log('After');