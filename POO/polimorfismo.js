class Animal {
    constructor(){

    }
    emitirSonido(){
        return console.log("Grrr...");
    }
}

class Gato extends Animal{
    emitirSonido(){
        console.log("Meawwww");
    }
}

class Perro extends Animal{
    emitirSonido(){
        console.log("Woof");
    }
}

const perro = new Perro();
const gato = new Gato();

perro.emitirSonido();
gato.emitirSonido();