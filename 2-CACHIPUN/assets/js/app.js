//preguntar numeros de juegos deseados


var numJuegos = parseInt(prompt("cuantos juegos desea? (máximo 3)"));
while (parseInt(numJuegos) <=0 || parseInt(numJuegos) > 3){ 
   
    alert("Opción inválida");
    var numJuegos = parseInt(prompt("cuantos juegos desea? (máximo 3)"));
    
} 

while (numJuegos != 0){
//inicializar jugadas

//pedrir que seleccione entre las alternativas

var seleccionJugador = (prompt("Elije, piedra (1), papel (2) o tijera (3)"));

    switch (seleccionJugador) {
        case "1":
            seleccionJugador = "piedra";
            break;
        
        case "2":
            seleccionJugador = "papel";
            break;    
                
        case "3":
            seleccionJugador = "tijera";
            break;

        default:
            alert("Opción inválida");
            break;    
    }


    //hacer que IA haga su selección

    var seleccionIAnum = Math.floor(Math.random() * 3);
    var seleccionIAJugada ="";

    switch (seleccionIAnum) {
        case 0:
            seleccionIAJugada = "piedra";
            break;
        
        case 1:
            seleccionIAJugada = "papel";
            break;    
                
        case 2:
            seleccionIAJugada = "tijera";
            break;
    }

    //evaluar selecciones y añadir lógica de victoria

    var resultado = " ";
    if (
    (seleccionJugador === "piedra" && seleccionIAJugada === "tijera") ||
    (seleccionJugador === "papel" && seleccionIAJugada === "piedra") ||
    (seleccionJugador === "tijera" && seleccionIAJugada === "papel")
        ){
            resultado = "victoria ¡¡felicitaciones!!";
        
        
        } else if (seleccionJugador === seleccionIAJugada) {
                resultado = "Empate"; 
            }else {
                resultado = "Derrota";
            }

    //mostrar resultado (ganó, perdió o empató)

    alert(`La IA escigió: ${seleccionIAJugada.toUpperCase()}, Tu elegiste: ${seleccionJugador.toUpperCase()} el resultado es: ${resultado.toUpperCase()}`);

    //repetir o finalizar   

numJuegos -- 
}

alert("Game over");

