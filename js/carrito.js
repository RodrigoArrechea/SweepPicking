const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const carritoElectricas = (prodId) => {
    const item = electricas.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}

const carritoCriollas = (prodId) => {
    const item = criollas.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}

const carritoAcusticas = (prodId) => {
    const item = acusticas.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}

const carritoOfertas = (prodId) => {
    const item = "./data.json".find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}







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