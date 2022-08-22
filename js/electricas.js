// ARRAY

class guitarra{
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
electricas.push(new guitarra(50,"../src/img/50.jpg","Gibson", "Les Paul Tribute", 690400, "Caoba", "Satinado"));
electricas.push(new guitarra(29,"../src/img/29.jpg","Gibson", "Sg Special", 510000, "Caoba", "Satinado"));
electricas.push(new guitarra(67,"../src/img/67.jpg","Fender", "Mustang 65s Classic Series", 480500, "Álamo", "Olympic White"));
electricas.push(new guitarra(25,"../src/img/25.jpg","Fender", "Meteora Hh Pfn", 317500, "Arce", "Azul petróleo"));
electricas.push(new guitarra(64,"../src/img/64.jpg","Epiphone", "Explorer Original Collection", 280000, "Caoba", "Ebony"));
electricas.push(new guitarra(46,"../src/img/46.jpg","Epiphone", "Joe Pass Emperor II Pro", 299300, "Arce", "Vintage sunburst"));
electricas.push(new guitarra(58,"../src/img/58.jpg","Squier", "Stratocaster Affinity Series", 152300, "Álamo", "Brown sunburst"));
electricas.push(new guitarra(37,"../src/img/37.jpg","Squier", "Paranormal Toronado HH", 225500, "Álamo", "Negro"));
electricas.push(new guitarra(42,"../src/img/42.jpg","Ibanez", "Gio Gsa60", 115300, "Caoba", "Walnut flat"));
electricas.push(new guitarra(31,"../src/img/31.jpg","Ibanez", "Frm150 Fireman", 385700, "Caoba", "Transparent red"));
electricas.push(new guitarra(35,"../src/img/35.jpg","SX", "Telecaster Ftl50 1950", 82700, "Basswood", "Sunburst"));
electricas.push(new guitarra(55,"../src/img/55.jpg","SX", "Les Paul Standard", 86300, "Caoba", "Cherry sunburst"));
electricas.push(new guitarra(60,"../src/img/60.jpg","Cort", "M Custom", 370800, "Maple", "Tiger Eye Sunburst"));
electricas.push(new guitarra(22,"../src/img/22.jpg","Cort", "Sunset 2", 170700, "Caoba", "Rojo"));
electricas.push(new guitarra(43,"../src/img/43.jpg","Hagstrom", "Retroscape Impala", 250600, "Caoba", "Negro"));

// OPERADORES Y CONDICIONALES AVANZADOS - LO VOY A USAR A FUTURO PARA HACER UN FILTRO DE BÚSQUEDA POR MARCA Y PRECIO
const { marca, precio } = guitarra

//DOM

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
})