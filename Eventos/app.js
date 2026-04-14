const inputNumero = document.getElementById("NumeroFilas");
const boton = document.getElementById("btnGenerar");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    // Obtenemos el número ingresado
    const numero = parseInt(inputNumero.value);

    // Limpiamos la lista anterior
    lista.innerHTML = "";

    // Validamos que sea un número válido
    if (!isNaN(numero) && numero > 0) {
        for (let i = 1; i <= numero; i++) {
            const li = document.createElement("li");
            li.textContent = "Elemento " + i;
            lista.appendChild(li);
        }
    } else {
        alert("Por favor ingresa un número válido mayor a 0");
    }
});
