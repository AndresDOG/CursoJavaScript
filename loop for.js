/*Este ciclo lo que hace es crear una variable index que va estar inicializada en 0
 y si este es menor a la longitud del array ejecuta la funcion ,
  ademas la incrementa en 1 , 
  de esta forma se recorre cada posicion del array ,
   hasta que i sea = array.length */



let juegos = ["Assasins Creed", "GTA V " , "Apex Legends", "Far Cry"];

function bienvenidaJuego(juego) {
    console.log(`Biemvenido a, ${juego}`);
}

for(let i = 0; i < juegos.length; i++){
    bienvenidaJuego(juegos[i]);
}

/* Esta otra forma es un poco mas sencilla ,
 ya que lo que hace es crear una variable en singular del array
  que es un plural de datos y con el of los recorrre */
let estudiantes = ["Maria" , "Pedro" , "Jose" ,"Andres"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}