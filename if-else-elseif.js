let restrincion = 18;

function votar (edad) {
    if (edad ===18){
        return ("Tu primera votacion")
    } else if (edad >=18) {
        return ("Puedes votar de nuevo")
    } else {
        return ("No puedes votar ")
    }
}

// otra forma de hacerlo usando el condicional ternario
let MayordeEdad = 18;

function comprobacion(edad) {
 let resultado = edad >= MayordeEdad ? "Ya eres mayor de edad" : "aun no eres mayor de edad"
return resultado;
}