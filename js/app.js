// DOM - TEMPLATES CARDS

const templateOfertas = document.querySelector("#contenedorOfertas")
const templateElectricas = document.querySelector("#contenedorElectricas")
const templateCriollas = document.querySelector("#contenedorCriollas")
const templateAcusticas = document.querySelector("#contenedorAcusticas")

fetch ("./stock.json")
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
                    <button id="agregar-${par.id}" onclick="agregarAlCarrito(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
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
                    <button id="agregar-${par.id}" onclick="agregarAlCarrito(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
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
                    <button id="agregar-${par.id}" onclick="agregarAlCarrito(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
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
                    <button id="agregar-${par.id}" onclick="agregarAlCarrito(${par.id})" class="boton-agregar"><img src="../src/img/carrito.png" class="carritoBoton" alt="">COMPRAR</button>
                </div>
            `
            templateAcusticas.append(div)
        })
    })


// CARRITO

const carrito = JSON.parse (localStorage.getItem ('carrito')) || []
const contenedorCarrito = document.querySelector("#carrito-contenedor")

const stock = []

function productos () {
    fetch ("../stock.json")
    .then (res => res.json())
    .then (res => stock.push(res))
}

productos()

console.log(stock[0])

const agregarAlCarrito = (id) => {
    const item = stock.find((par) => par.id === id)
    carrito.push(item);
    console.log(carrito)
}

agregarAlCarrito(5)
agregarAlCarrito(10)
































// FORMULARIO SUBSCRIPCIÓN
  
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

    localStorage.setItem("Clientes", JSON.stringify(baseDeDatos))

    console.log(...baseDeDatos)

    form.reset()
})