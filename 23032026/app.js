//Inicializamos un arreglo vacio
let nombres = [];

//Funcion para agregar nombres
function agregarNombre() {
    let nombre = prompt("Ingresa un nombre");
    if (nombre) {
        nombres.push(nombre);
        alert(`!Nombre: ${nombre} agregado exitosamente¡`);
    } else {
        alert("El campo no puede estar vacío");
    }
}

//Funcion para mostrar los nombres
function mostrarNombre() {
    if (nombres.length === 0){
            alert("Arreglo esta vacio, \n No tenemos nombre");
    }else{
            let mensaje = "Nombres almacenados:\n";
            nombres.forEach((nombre,indice) => {
                mensaje+= `${indice+1} .${nombre}\n`;
            });
            alert(mensaje);
        }
    }


function mostrarMenu(){

    let opcion;
    do{
        opcion = prompt("Opciones disponibles\n1. Agregar nombre\n2. Mostrar nombre\n3. Salir\nElija una opción");
        switch (opcion) {
            case '1':      
                agregarNombre();
               // console.log("Estamos en construcción de la función agregar nombre");
                break;
            case '2':
                mostrarNombre();
                break;
            case '3':
                alert("Saliendo del programa");
                break;
            default:
                alert("Opción no válida, Intenta nuevamente ");
        }
    }while (opcion !== '3');
}

//iniciar aplicacion
mostrarMenu();
