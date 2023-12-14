// el switch permite validar varios casos ,
//es importante que tenga el brake debido
//a que sino valida todos los casos sin estos ser verdaderos

let ataqueTijera = "Tijera";
let ataquePapel = "Papel";
let ataquePiedra = "Piedra";

function combate(user, cpu) {
  let resultado;

  switch (true) {
    case user === cpu:
      resultado = "EMPATARON";
      break;
    case (user === ataqueTijera && cpu === ataquePapel) ||
      (user === ataquePapel && cpu === ataquePiedra) ||
      (user === ataquePiedra && cpu === ataqueTijera):
      resultado = "GANO EL USUARIO";
      break;
    default:
      resultado = "GANO LA CPU";
  }
  return resultado;
}
