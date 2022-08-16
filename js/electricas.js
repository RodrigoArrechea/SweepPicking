// ARRAY

class guitarra{
    constructor(id, marca, modelo, precio, material, color){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo,
        this.precio = precio;
        this.material = material;
        this.color = color;
    }
}

const guitarras = [];
guitarras.push(new guitarra(50,"Gibson", "Les Paul Tribute", 690400, "Caoba", "Satinado"));
guitarras.push(new guitarra(58,"Squier", "Stratocaster Affinity Series", 152300, "Álamo", "Brown sunburst"));
guitarras.push(new guitarra(64,"Epiphone", "Explorer Original Collection", 280000, "Caoba", "Ebony"));
guitarras.push(new guitarra(67,"Fender", "Mustang 65s Classic Series", 480500, "Álamo", "Olympic White"));
guitarras.push(new guitarra(29,"Gibson", "Sg Special", 510000, "Caoba", "Satinado"));
guitarras.push(new guitarra(37,"Squier", "Paranormal Toronado HH", 225500, "Álamo", "Negro"));
guitarras.push(new guitarra(46,"Epiphone", "Joe Pass Emperor II Pro", 299300, "Arce", "Vintage sunburst"));
guitarras.push(new guitarra(42,"Ibanez", "Gio Gsa60", 115300, "Caoba", "Walnut flat"));
guitarras.push(new guitarra(31,"Ibanez", "Frm150 Fireman", 385700, "Caoba", "Transparent red"));
guitarras.push(new guitarra(25,"Fender", "Meteora Hh Pfn", 317500, "Arce", "Azul petróleo"));
guitarras.push(new guitarra(35,"SX", "Telecaster Ftl50 1950", 82700, "Basswood", "Sunburst"));
guitarras.push(new guitarra(55,"SX", "Les Paul Standard", 86300, "Caoba", "Cherry sunburst"));
guitarras.push(new guitarra(60,"Cort", "Custom Tes Mics Seymour Duncan", 370800, "Maple", "Tiger Eye Sunburst"));
guitarras.push(new guitarra(22,"Cort", "Sunset 2", 170700, "Caoba", "Rojo"));
guitarras.push(new guitarra(43,"Hagstrom", "Retroscape Impala", 250600, "Caoba", "Negro"));

//DOM

const section = document.querySelector("#productos")

const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

guitarras.forEach((par) => {
    let cardClonada = card.cloneNode(card,true)
    cardClonada.children[0].innerText = par.marca
    cardClonada.children[1].innerText = par.modelo
    cardClonada.children[2].innerText = "Material: " + par.material
    cardClonada.children[3].innerText = "Color: " + par.color
    cardClonada.children[4].innerText = "$" + par.precio
    section.appendChild(cardClonada)
})