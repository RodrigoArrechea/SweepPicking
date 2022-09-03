// ARRAY

class electrica{
    constructor(id, img, marca, modelo, precio, material, color){
        this.id = id;
        this.img = img;
        this.marca = marca;
        this.modelo = modelo,
        this.precio = precio;
        this.material = material;
        this.color = color;
    }
}

const electricas = [];
electricas.push(new electrica(1,"../src/img/1.jpg","Gibson", "Les Paul Tribute", 690400, "Caoba", "Satinado"));
electricas.push(new electrica(2,"../src/img/2.jpg","Gibson", "Sg Special", 510000, "Caoba", "Satinado"));
electricas.push(new electrica(3,"../src/img/3.jpg","Fender", "Mustang 65s Classic Series", 480500, "Álamo", "Olympic White"));
electricas.push(new electrica(4,"../src/img/4.jpg","Fender", "Meteora Hh Pfn", 317500, "Arce", "Azul petróleo"));
electricas.push(new electrica(5,"../src/img/5.jpg","Epiphone", "Explorer Original Collection", 280000, "Caoba", "Ebony"));
electricas.push(new electrica(6,"../src/img/6.jpg","Epiphone", "Joe Pass Emperor II Pro", 299300, "Arce", "Vintage sunburst"));
electricas.push(new electrica(7,"../src/img/7.jpg","Squier", "Stratocaster Affinity Series", 152300, "Álamo", "Brown sunburst"));
electricas.push(new electrica(8,"../src/img/8.jpg","Squier", "Paranormal Toronado HH", 225500, "Álamo", "Negro"));
electricas.push(new electrica(9,"../src/img/9.jpg","Ibanez", "Gio Gsa60", 115300, "Caoba", "Walnut flat"));
electricas.push(new electrica(10,"../src/img/10.jpg","Ibanez", "Frm150 Fireman", 385700, "Caoba", "Transparent red"));
electricas.push(new electrica(11,"../src/img/11.jpg","SX", "Telecaster Ftl50 1950", 82700, "Basswood", "Sunburst"));
electricas.push(new electrica(12,"../src/img/12.jpg","SX", "Les Paul Standard", 86300, "Caoba", "Cherry sunburst"));
electricas.push(new electrica(13,"../src/img/13.jpg","Cort", "M Custom", 370800, "Maple", "Tiger Eye Sunburst"));
electricas.push(new electrica(14,"../src/img/14.jpg","Cort", "Sunset 2", 170700, "Caoba", "Rojo"));
electricas.push(new electrica(15,"../src/img/15.jpg","Hagstrom", "Retroscape Impala", 250600, "Caoba", "Negro"));

// OPERADORES Y CONDICIONALES AVANZADOS - LO VOY A USAR A FUTURO PARA HACER UN FILTRO DE BÚSQUEDA POR MARCA Y PRECIO
const { marca, precio } = electrica

// DOM - TEMPLATE CARD

const section = document.querySelector("#productos")

const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

electricas.forEach((par) => {
    let cardClonada = card.cloneNode(card,true)
    cardClonada.children[0].src = par.img
    cardClonada.children[1].innerText = par.marca
    cardClonada.children[2].innerText = par.modelo
    cardClonada.children[3].innerText = "Material: " + par.material
    cardClonada.children[4].innerText = "Color: " + par.color
    cardClonada.children[5].innerText = "$" + par.precio

    section.appendChild(cardClonada)

    const btnComprar = document.querySelector(".btn-comprar")
    btnComprar.addEventListener('click', () =>{
      agregarAlCarrito(par.id)
    })
})