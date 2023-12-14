function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar','Daniela','Patricia','Andres'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);