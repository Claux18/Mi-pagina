//Operadores Logicos

/*&& Si los dos son verdaderos devuelve verdaderos
|| Con que uno de los dos sea verdadero devuelve verdadero
! Negación, si es verdadero devuelve falso y viceversa*/

//var campara = true && true;
//console.log(campara);

/*var campara = 10 < 8 && 10 == 10;
console.log(campara);

var compara = true && true;
console.log(compara);

var compara2 = 10 < 8 || 10 == 10;
console.log(compara2);

var compara3 = 10 < 8 || 10 == 9;
console.log(compara3);
*/

// Operadores Lógicos

var a = true;
var b = false;
var x = 10;
var y = 5;

// AND
console.log("AND:", a && b);

// OR
console.log("OR:", a || b);

// NOT
console.log("NOT:", !a);

// XOR (simulado)
console.log("XOR:", (a && !b) || (!a && b));

// Ternario
console.log("Ternario:", x > y ? "x es mayor" : "y es mayor");

// Comparación con lógica
console.log("Comparación:", x > y && x == 10);
