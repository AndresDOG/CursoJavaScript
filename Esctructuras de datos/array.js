class MyArrray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const myArray = new MyArrray();

myArray.push("Jorge");
myArray.push("Pedrito");
myArray.push("Miguel");
myArray.push("Kevin");
const arrayData = Object.values(myArray.data);
const ultimoElemento = arrayData[arrayData.length - 1];

myArray.pop();
console.log(myArray);
console.log(ultimoElemento);
