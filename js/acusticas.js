// ARRAY

class acustica{
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

const acusticas = [];
acusticas.push(new acustica(25,"../src/img/25.jpg","Fender", "Acústica FA-235E", 162500, "Arce", "FA-235E"));
acusticas.push(new acustica(26,"../src/img/26.jpg","Fender", "Electroacústica Newporter", 197600, "Abeto", "Rustic copper"));
acusticas.push(new acustica(27,"../src/img/27.jpg","Epiphone", "Acústica DR100", 83000, "Caoba", "Vintage sunburst"));
acusticas.push(new acustica(28,"../src/img/28.jpg","Epiphone", "Electroacústica J200", 211400, "Arce", "Vintage natural"));
acusticas.push(new acustica(29,"../src/img/29.jpg","Epiphone", "Acústica PRO-1", 86800, "Caoba", "Acústica"));
acusticas.push(new acustica(30,"../src/img/30.jpg","Gracia", "Acústica 110", 47300, "Abedul", "Natural"));
acusticas.push(new acustica(31,"../src/img/31.jpg","Godin", "Electroacústica Q1", 228000, "Caoba", "Antique Burst"));
acusticas.push(new acustica(32,"../src/img/32.jpg","Cort", "Acústica MR730FX", 192000, "Abeto", "Natural glossy"));
acusticas.push(new acustica(33,"../src/img/33.jpg","Epiphone", "Acústica Jumbo", 184000, "Caoba", "Ebony"));
acusticas.push(new acustica(34,"../src/img/34.jpg","Martin & Co.", "Electroacústica Fishman", 790500, "Caoba", "Rustic copper"));
acusticas.push(new acustica(35,"../src/img/35.jpg","Gimmie Shelter", "Electroacústica Apx", 85600, "Abeto", "Cherry"));
acusticas.push(new acustica(36,"../src/img/36.jpg","Racker", "Acústica Basic", 22500, "Pino", "Nylon caoba"));

// OPERADORES Y CONDICIONALES AVANZADOS - LO VOY A USAR A FUTURO PARA HACER UN FILTRO DE BÚSQUEDA POR MARCA Y PRECIO
const { marca, precio } = acustica

// DOM

const section = document.querySelector("#productos")

const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

acusticas.forEach((par) => {
    let cardClonada = card.cloneNode(card,true)
    cardClonada.children[0].src = par.img
    cardClonada.children[1].innerText = par.marca
    cardClonada.children[2].innerText = par.modelo
    cardClonada.children[3].innerText = "Material: " + par.material
    cardClonada.children[4].innerText = "Color: " + par.color
    cardClonada.children[5].innerText = "$" + par.precio
    section.appendChild(cardClonada)
})