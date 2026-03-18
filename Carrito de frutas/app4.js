/*const carrito = ["leche", "pan", "huevos", "azucar", "cafe", "te", "mantequilla", "queso", "jamon", "frutas"];
let frutaEliminada=carrito.splice(0, 3);
console.log(frutaEliminada);
console.log(carrito);
    
let frutasEliminada = [];
frutasEliminada.push("leche", "pan", "huevos");
console.log(frutasEliminada);

if(confirm("Se te agrego el producto")){
    console.log("Producto agregado al carrito");
}else{
    console.log("Producto no agregado al carrito"); 
}*/

// Declaración de arreglo vacío
const frutas = [];

// Función para pedir una fruta al usuario
function pedirFruta(mensaje) {
    let fruta = prompt(mensaje);
    return fruta ? fruta.trim() : null; // elimina espacios y evita null
}

// Primera fruta
let fruta = pedirFruta(" Carrito de frutas: ¿Qué fruta quieres?");
if (fruta) frutas.push(fruta);

// Mientras el usuario quiera seguir agregando
while (confirm("¿Quieres agregar otra fruta?")) {
    fruta = pedirFruta(" ¿Qué fruta quieres agregar?");
    if (fruta) frutas.push(fruta);
}

// Mostrar resultado final con enumeración
console.log(" Usted compró:");
frutas.forEach((f, i) => console.log(`${i + 1}. ${f}`));
