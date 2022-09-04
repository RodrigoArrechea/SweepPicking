const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const contenedorCarrito = document.querySelector("#carrito-contenedor")

const agregarAlCarrito = (id) => {
    const item = electricas.find((par) => par.id === id)
    carrito.push(item);
    console.log(carrito)

    const item2 = criollas.find((par) => par.id === id)
    carrito.push(item2);
    console.log(carrito)

    const item3 = acusticas.find((par) => par.id === id)
    carrito.push(item3);
    console.log(carrito)

    const item4 = "./data.json".find((par) => par.id === id)
    carrito.push(item4);
    console.log(carrito)

    // templateCarrito ()
}





// const elminarDelCarrito = (id) => {
//     const producto = carrito.find((par) => par.id === id)
//     producto.cantidad -= 1

//     if (producto.cantidad === 0) {
//         const indice = carrito.indexOf(producto)
//         carrito.splice(indice, 1)
//     }
 
//     localStorage.setItem('carrito', JSON.stringify(carrito))
//     toastEliminar()
//     renderCarrito()
// }




// const templateCarrito = () => {
//     contenedorCarrito.innerHTML = ""

//     carrito.forEach((par) => {
//         const div = document.createElement('div')
//         div.className = "productoEnCarrito"

//         div.innerHTML = `
//                     <p>${par.marca}</p>
//                     <p>${par.modelo}</p>
//                     <p>Precio: $${par.precio}</p>
//                     <p>Cantidad: ${prod.cantidad}</p>
//                     <button onclick="elminarDelCarrito(${prod.id})" class="boton-eliminar"><img src="../src/img/eliminar.png" class="" alt=""></button>
//         `

//         contenedorCarrito.append(div)
//     })

//     actualizarCantidad()
//     actualizarTotal()
// }






// const actualizarCarrito = () => {
//     contenedorCarrito.innerHTML = ""

//     carrito.forEach((par) => {
//         const div = document.createElement('div')
//         div.className = ('productoEnCarrito')
//         div.innerHTML = `
//         <p>${par.nombre}</p>
//         <p>Precio:$${par.precio}</p>
//         <p>Cantidad: <span id="cantidad">${par.cantidad}</span></p>
//         <button onclick="eliminarDelCarrito(${par.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//         `

//         contenedorCarrito.appendChild(div)
        
//         localStorage.setItem('carrito', JSON.stringify(carrito))

//     })
// }






// // BOTÓN COMPRAR

// const btnComprar = document.querySelector(".btn-comprar")

// btnComprar.addEventListener('click', () => {
   
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'bottom-end',
//         showConfirmButton: false,
//         timer: 2000,
//         color: "#f2f2f2",
//         background: "#2c3d73",
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'success',
//         title: 'Su producto fue agregado al carrito'
//       })
// })




// let total = 0
// for (let i = 0; i < carrito.length; i++) {
//     total += carrito[i];
// }

// console.log("Total: $" + total)

// // OPERADORES Y CONDICIONALES AVANZADOS
// carrito.length === 0 && console.log("Su carrito se encuentra vacío.")