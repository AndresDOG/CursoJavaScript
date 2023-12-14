// flat
const array = [1, 1, 2, 3, 4, [1, 3, 4, 5, [2, 3, 5, 7]]];
console.log(array.flat(3));


// map
const array2 = [1,3,3,4,4,5]
console.log(array2.map(v => [v, v * 2]));

// flatmap
const array3 = [1,3,3,4,4,5]
console.log(array3.flatMap(v => [v, v * 2]));


