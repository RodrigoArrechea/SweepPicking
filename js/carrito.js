// const carrito = [];

// OPERADORES Y CONDICIONALES AVANZADOS
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

let total = 0
for (let i = 0; i < carrito.length; i++) {
    total += carrito[i];
}

console.log("Total: $" + total)

// OPERADORES Y CONDICIONALES AVANZADOS
carrito.length === 0 && console.log("Su carrito se encuentra vacío.")