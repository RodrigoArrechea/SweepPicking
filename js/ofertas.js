const ofertas = document.querySelector("#productos")

const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

fetch("./data.json")
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((par) => {
            let cardClonada = card.cloneNode(card,true)
            cardClonada.children[0].src = par.img
            cardClonada.children[1].innerText = par.marca
            cardClonada.children[2].innerText = par.modelo
            cardClonada.children[3].innerText = "Material: " + par.material
            cardClonada.children[4].innerText = "Color: " + par.color
            cardClonada.children[5].innerText = "Precio Original: $" + par.precioOriginal
            cardClonada.children[6].innerText = "OFERTA: $" + par.precioOferta
            ofertas.appendChild(cardClonada)
        })
    })