let json1 = {
  name: "Mr. Michi",
  food: "Pescado",
};
let json2 = {
  age: 12,
  color: "Blanco",
};

function solution(json1, json2) {
  let union = { ...json1, ...json2 };
  return union;
}

console.log(solution(json1,json2));


function sollution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    return { ...json1, ...json2 };
  }

  console.log(sollution);