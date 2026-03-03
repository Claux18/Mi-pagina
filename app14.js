 // Genera un número aleatorio entre 1 y 10
    let numeroMaquina = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    let mensaje = "";

    while (intentos > 0) {
      let intentoUsuario = prompt("Adivina el número (1 al 10). Te quedan " + intentos + " intentos:");
      intentoUsuario = Number(intentoUsuario);

      if (intentoUsuario === numeroMaquina) {
        mensaje = "¡Correcto! El número era " + numeroMaquina + ". Ganaste!!! ";
        break;
      } else {
        intentos--;
      }
    }

    if (intentos === 0 && mensaje === "") {
      mensaje = "Se acabaron los intentos. El número era " + numeroMaquina + ". Suerte para la próxima vez.";
    }

    alert(mensaje); 
  