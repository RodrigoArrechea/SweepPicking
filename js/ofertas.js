const templateOfertas = document.querySelector("#contenedorOfertas")

fetch("./data.json")
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((par) => {
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