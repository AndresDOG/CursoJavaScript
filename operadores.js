//Operaciones Aritmeticas
3 + 2;
3 - 2;
3 * 2;
3 / 2;

// Negacion
!false;
// esto es igual a true , ya que lo cambia
// Operador de contenacion de Strings'
"Andres David " + "Olea Guzman" || "Andres David" + "  " + "Olea Guzman";
("Andres David Olea Guzman");
//Operador de Comparacion == Solo compara el valor , no tanto el tipo
3 == "3"; // true

3 === "3"; // False  === Compara el valor y el tipo

// < > esto comprueba y devuelve un booleano

5 < 3; // true
5 > 3; // false

// Aqui realiza una doble validacion
5 <= 6; //true
5 >= 6; //Falso

// Validar si ambas condiciones son verdad
// se usa &&
//Ej

let a = 5;
let b = 4;

a <= 6; // true
b >= 2; // true

a && b; // Valida si ambas son true
let resultado = a <= 6 && b <= 2;
// Para validar si cualquiera es verdadera , ya sea 1 sola||

a || b;
let res = a <= 6 || b <= 2;
// Para incrementar el valor de una variable se usa el ++ en 1
//Ej
let edad = 18;
edad++;

// Si quiero incrementar con otro valor
edad += 2;
