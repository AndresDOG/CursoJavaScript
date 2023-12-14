// Tenemos el filter que permite filtrar los objetos de un array .
//De acuerdo a una validacion ,
//esto lo asigna en otro array sin modificar el array inicial

let articulos = [
  { tipo: "vici", costo: 3000 },
  { tipo: "Tv", costo: 2500 },
  { tipo: "Libro", costo: 320 },
  { tipo: "Celular", costo: 11500 },
  { tipo: "Laptop", costo: 22500 },
  { tipo: "Teclado", costo: 12500 },
  { tipo: "Audifonos", costo: 5500 },
];

let articulosFiltrados = articulos.filter((articulo) => {
  return articulo.costo <= 10000;
});
console.log(articulosFiltrados);

//Tenemos el map() que permite traer una propiedad en concreta que tenga un array de un objeto

let obtenerPropiedad = articulos.map((articulo) => {
  return articulo.tipo;
});
console.log(obtenerPropiedad);
//Tenemos el find() que permite bucar una propiedad o articulo en cocreto a travez de una validacion

let validarInfo = articulos.find((articulo) => {
  return articulo.tipo === "Celular";
});
console.log(validarInfo);

//Foreach() este no crea un nuevo array , simplemente me manda los objetos o propiedades que yo le diga el array existente

articulos.forEach((articulo) => {
  console.log(articulo.tipo);
});

//some() permite validar si existe alguna propiedad o valor de un objeto en un array
//Devuelve true o false
let articulosCaros = articulos.some((articulo) => articulo.costo >= 10000);

//Agregar al final .push()
let agregarArticuloAlFinal = (tipo, costo) => {
  articulos.push({ tipo: tipo, costo: costo });
};
agregarArticuloAlFinal("Televisor4K", 200000);

let nuevoArticulo = { tipo: "Play 5", costo: 1200000 };
articulos.push(nuevoArticulo);

console.log(articulos);

//Agregar al inicio .unshift()

let agregarArticuloAlInicio = (tipo, costo) => {
  articulos.unshift({ tipo: tipo, costo: costo });
};
agregarArticuloAlInicio("Lavadora", 800000)
console.log(articulos);

//eliminar el ultimo  .pop()

articulos.pop();
console.log(articulos);
//eliminar el primero .shift()

articulos.shift();
console.log(articulos);

// eliminar en cualquier posciones .splice(i,cantidad)
let reemplazarArticulo = (posicion, tipo, costo) => {
  articulos.splice(posicion, 1, { tipo: tipo, costo: costo });
};

// Llamada a la función para reemplazar el artículo en la posición 1
reemplazarArticulo(1, "Vicineitor", 300000);

console.log(articulos);