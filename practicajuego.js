let ataquePapel = "papel";
let ataqueTijera = "Tijera";
let ataquePiedra = "Piedra"

function combate(user,cpu){
    if(user === cpu) {
        return ("EMPATARON")
    } else if(user === ataqueTijera && cpu === ataquePapel || user === ataquePapel && cpu === ataquePiedra || user === ataquePiedra && cpu === ataqueTijera) {
        return ("GANO EL USER")
    } else {
        return ("GANO EL JUGADO 2")
    }
}
