//Comparar dos números
let numero1 = prompt("Ingresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (numero1 === numero2) {
      console.log("Los números son iguales.");
    } else if (numero1 > numero2) {
      console.log("El primer número " + numero1 + " es mayor que el segundo " + numero2 + "");
    } else {
      console.log("El segundo número " + numero2 + " es mayor que el primero " + numero1 + "");
    }

    console.log("Fin del programa...");