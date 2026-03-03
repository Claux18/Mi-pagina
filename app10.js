let opcionUser = prompt (`
    Elige una opción:
    1: Lunes
    2: Martes
    3: Miercoles
    4: Jueves
    5: Viernes
    6: Sábado
    7: Domingo
    `);
switch (opcionUser){
    case "1":
        console.log('Lunes');
        break;
    case "2":
        console.log("Martes");
        break;
    case "3":
        console.log("Miercoles");
        break;
    case "4":
        console.log("Jueves");
        break;
    case "5":
        console.log("Viernes");
        break;
    case "6":
        console.log("Sábado");
        break;
        case "7":
            console.log("Domingo");
            break;
        default:
            console.log("No válida");
    }