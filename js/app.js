// TEMPLATES CARDS

const templateOfertas = document.querySelector("#contenedorOfertas")
const templateElectricas = document.querySelector("#contenedorElectricas")
const templateCriollas = document.querySelector("#contenedorCriollas")
const templateAcusticas = document.querySelector("#contenedorAcusticas")

fetch ("../stock.json")
    .then( (res) => res.json())
    .then( (data) => {

        const ofertas = data.filter((par) => par.categoria === "oferta")

        ofertas.forEach((par) => {
            const div = document.createElement("div")

            div.className = "guitarra"
            div.innerHTML = `
                <div class="card">
                    <img src=${par.img} class="guitarra" alt="">
                    <h3>${par.marca}</h3>
                    <h5>${par.modelo}</h5>
                    <p>Material: ${par.material}</p>
                    <p>Color: ${par.color}</p>
                    <p class="precioOriginal">Precio original: $${par.precioOriginal}</p>
                    <p class="precioOferta">OFERTA: $${par.precio}</p>
                    <button id="agregar-${par.id}" onclick="comprarGuitarra(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
                </div>
            `
            templateOfertas.append(div)
        })
    })

fetch ("../stock.json")
    .then( (res) => res.json())
    .then( (data) => {

        const electricas = data.filter((par) => par.categoria === "electrica")

        electricas.forEach((par) => {
            const div = document.createElement("div")

            div.className = "guitarra"
            div.innerHTML = `
                <div class="card">
                    <img src=${par.img} class="guitarra" alt="">
                    <h3>${par.marca}</h3>
                    <h5>${par.modelo}</h5>
                    <p>Material: ${par.material}</p>
                    <p>Color: ${par.color}</p>
                    <p class="precio">Precio: $${par.precio}</p>
                    <button id="agregar-${par.id}" onclick="comprarGuitarra(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
                </div>
            `
            templateElectricas.append(div)
        })
    })

fetch ("../stock.json")
    .then( (res) => res.json())
    .then( (data) => {

        const criollas = data.filter((par) => par.categoria === "criolla")

        criollas.forEach((par) => {
            const div = document.createElement("div")

            div.className = "guitarra"
            div.innerHTML = `
                <div class="card">
                    <img src=${par.img} class="guitarra" alt="">
                    <h3>${par.marca}</h3>
                    <h5>${par.modelo}</h5>
                    <p>Material: ${par.material}</p>
                    <p>Color: ${par.color}</p>
                    <p class="precio">Precio: $${par.precio}</p>
                    <button id="agregar-${par.id}" onclick="comprarGuitarra(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
                </div>
            `
            templateCriollas.append(div)
        })
    })

fetch ("../stock.json")
    .then( (res) => res.json())
    .then( (data) => {

        const acusticas = data.filter((par) => par.categoria === "acustica")

        acusticas.forEach((par) => {
            const div = document.createElement("div")

            div.className = "guitarra"
            div.innerHTML = `
                <div class="card">
                    <img src=${par.img} class="guitarra" alt="">
                    <h3>${par.marca}</h3>
                    <h5>${par.modelo}</h5>
                    <p>Material: ${par.material}</p>
                    <p>Color: ${par.color}</p>
                    <p class="precio">Precio: $${par.precio}</p>
                    <button id="agregar-${par.id}" onclick="comprarGuitarra(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
                </div>
            `
            templateAcusticas.append(div)
        })
    })



// CARRITO

const carrito = JSON.parse (localStorage.getItem ("carrito")) || []
const contenedorCarrito = document.querySelector("#carrito-contenedor")
const btnVaciarCarrito = document.querySelector("#vaciar-carrito")
const btnFinalizarCompra = document.querySelector("#finalizar-compra")
const contadorCarrito = document.querySelector('#contadorCarrito')
const montoTotal = document.querySelector('#precioTotal')
const contenedorCompra = document.querySelector("#compra-contenedor")

// === STOCK TOTAL ===

const stock = []

const guitarras = async () => {
    const resp = await fetch("../stock.json")
    const data =  await resp.json()
    stock.push(data)
}

guitarras()

// === COMPRAR GUITARRA ===

const comprarGuitarra = (id) => {
    const guitarraEnCarrito = carrito.find ((par) => par.id === id)

    if (guitarraEnCarrito) {
        guitarraEnCarrito.cantidad += 1
    } else {
        const guitarra = stock[0].find((par) => par.id === id)
        carrito.push({
            ...guitarra,
            cantidad: 1
        })
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    guitarraAgregada ()
    renderCarrito ()
}

// === ELIMINAR GUITARRA ===

const eliminarGuitarra = (id) => {
    const guitarra = carrito.find((par) => par.id === id)
    guitarra.cantidad -= 1
    
    if (guitarra.cantidad === 0) {
        const indice = carrito.indexOf (guitarra)
        carrito.splice (indice, 1)
    }
 
    localStorage.setItem ("carrito", JSON.stringify (carrito))
    guitarraBorrada ()
    renderCarrito ()
}

// === ANULAR COMPRA ===

const ocultarBoton = () => {
    if (carrito.length === 0) {
        btnVaciarCarrito.style.display = "none"
        btnFinalizarCompra.style.display = "none"
    } else {
        btnVaciarCarrito.style.display = "block"
        btnFinalizarCompra.style.display = "block"
    }
}

const vaciarCarrito = () => {
    Swal.fire(
        {
            title: "¿Está seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí.",
            cancelButtonText: "No."
        }
    ).then( (result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            localStorage.setItem("carrito", JSON.stringify(carrito))
        
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                color: "#f2f2f2",
                background: "#2c3d73",
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Su carrito está vacío.'
              })

            renderCarrito ()
        }
    }) 
}

btnVaciarCarrito.addEventListener("click", vaciarCarrito)

// === RENDER MODAL DEL CARRITO ===

const renderCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((par) => {
        const div = document.createElement("div")
        div.className = "productoEnCarrito"
        div.innerHTML = `
                    <img src=${par.img} class="guitarraMiniatura" alt="">
                    <p>${par.marca}</p>
                    <p>${par.modelo}</p>
                    <p>Precio: $${par.precio}</p>
                    <p>Cantidad: ${par.cantidad}</p>
                    <button onclick="eliminarGuitarra(${par.id})" class="boton-eliminar"><img src="./src/img/borrar.png" class="borrarGuitarra" alt=""></button>
        `
        contenedorCarrito.append(div)
    })

    actualizarCantidad ()
    actualizarTotal ()
}

// === CANTIDAD DE CADA PRODUCTO ===

const actualizarCantidad = () => {
    contadorCarrito.innerText = carrito.reduce ((acc, par) => acc += par.cantidad, 0)

    ocultarBoton ()
}

// === DEFINIR PRECIO TOTAL ===

const actualizarTotal = () => {
    montoTotal.innerText = carrito.reduce ((acc, par) => acc += par.precio * par.cantidad, 0)
}

// === ALERTS AGREGAR/QUITAR GUITARRA ===

const guitarraAgregada = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        color: "#f2f2f2",
        background: "#2c3d73",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Su producto fue agregado al carrito.'
      })

}

const guitarraBorrada = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        color: "#f2f2f2",
        background: "#2c3d73",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Su producto fue eliminado del carrito.'
      })

}

renderCarrito()



// BUSCADOR DE GUITARRAS

document.addEventListener("keyup", e => {

    if (e.target.matches("#filtroGuitarra")){
  
        if (e.key === "Escape") e.target.value = ""
  
        document.querySelectorAll(".card").forEach ( guitarra => {
  
            guitarra.textContent.toLowerCase ().includes (e.target.value.toLowerCase ())
              ?guitarra.classList.remove("filtro")
              :guitarra.classList.add("filtro")
        })
    }
})



// FORMULARIO SUSCRIPCIÓN
  
const form = document.querySelector('#formulario')
const inputMail = document.querySelector('#newsletter1')

const baseDeDatos = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const mail = inputMail.value

    if (mail.length < 5) {
    Swal.fire("Email inválido.")
     return
    }

    const user = {
        mail: mail,
    }

    baseDeDatos.push(user)

    Swal.fire(
        '¡Email ingresado!',
        'Gracias por ser parte de nuestra comunidad.',
        'success',
      )

    localStorage.setItem("Suscriptores", JSON.stringify(baseDeDatos))

    form.reset()
})



// FORMULARIO DE COMPRA

const formCompra = document.querySelector('#formCompra')
const inputNombre = document.querySelector('#inputNombre')
const inputoApellido = document.querySelector('#inputApellido')
const inputEmail = document.querySelector('#inputEmail')
const inputDireccion = document.querySelector('#inputDireccion')
const inputLocalidad = document.querySelector('#inputCity')
const inputPago = document.querySelector('#inputState')
const inputCuotas = document.querySelector('#inputCuotas')

const compras = []

formCompra.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const nombre = inputNombre.value
    const apellido = inputoApellido.value
    const email = inputEmail.value
    const direccion = inputDireccion.value
    const localidad = inputLocalidad.value
    const pago = inputPago.value
    const cuotas = inputCuotas.value

    if (nombre.length < 5 || apellido.length < 5 ||  email.length < 5 || direccion.length < 5 || localidad.length < 5) {
    Swal.fire("Datos inválidos.")
     return
    }

    const compra = {
        productos: carrito,
        nombre: nombre,
        apellido: apellido,
        email: email,
        dirección: direccion,
        localidad: localidad,
        pago: pago,
        cuotas: cuotas
    }

    compras.push(compra)

    Swal.fire(
        '¡Compra finalizada!',
        'Nos comunicaremos vía email para coordinar pago y envío.',
        'success',
      )
    
    localStorage.setItem("Compras", JSON.stringify(compras))
    
    formCompra.reset()
})