//Objetos

//manera forma-ya no se ocupa
/*var miCarro = new Object();
miCarro.marca = "Ford";
miCarro.modelo = "Ikon Fiesta";
miCarro.año = 2013;
console.log(miCarro);

//manera que se ocupa
var miCarro = {
    marca: 'Ford',
    modelo: 'Ikon Fiesta',
    año: 2013
};
console.log(miCarro);*/

const alumno = {
    id: 413112576,
    nombre: 'Sofia',
    primerApellido: 'Morales',
    segundoApellido: 'Vera',
    numeroContacto: [5515051510, 5523469231],
    diccionario: {
        calle: 'Goma',
        Numero: '298',
        lote: '3',
        manzana: '9',
        colonia: 'Granjas Mexico',
        alcaldia: 'Iztacalco',
        cp: '08239',
        ciudad: 'Ciudad de Mexico',
        pais: 'Mexico'
    },
    educacion: {
        kinder: {
            nombre: "Estrellitas del Saber",
            publica: false,
            jugar: function(){
                console.log("Los niños juegan con bloques de colores");
            }
        },
        primaria: {
            nombre: "Benito Juárez",
            publica: true,
            tiempoRecredo: '30 min',
            estudiar: function(materia){
                console.log("Estoy estudiando " + materia);
            }
        },
        secundaria: {
            nombre: "Secundaria Benito Juárez",
            publica: true,
            pubertos: true,
            participar: function(actividad){
                console.log("Hoy participé en " + actividad);
            }
        }
    },
    actividadesPersonales: {
        lectura:'El Arlequin',
        fisica:'correr',
        actividadCotidiana (actividad){
            return `${this.fisica} en el horario de ${actividad}`;
        }
    }
}

console.log(alumno.actividadesPersonales.actividadCotidiana("06:30 am"));
console.log(alumno.educacion.kinder.jugar()); 
console.log(alumno.educacion.primaria.estudiar("Matemáticas")); 
console.log(alumno.educacion.secundaria.participar("el concurso de ciencias"));

/***
 * Kinder
 *primaria
 *secundaria

/***
 * Calle
 * Numero
 *    Numero interior
 * Colonia
 * Alccaldia
 * CP
 * Ciudad
 * Pais
 */
console.log(alumno.hasOwnProperty("nombre"));
console.log(alumno.hasOwnProperty("numeroCuenta"));
console.log(alumno);

//Crear
alumno.numeroCuenta= 18032026;
//leer
console.log(alumno['numeroCuenta']);

alumno.nombre="Eva";
console.log(alumno['nombre']);
console.log(alumno['numeroContacto']);

//eliminar
delete alumno.segundoApellido;

console.log(alumno['nombre']);