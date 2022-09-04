// ARRAY

class criolla{
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

const criollas = [];
criollas.push(new criolla(16,"../src/img/16.jpg","Gracia", "M7", 37500, "Pino", "Natural"));
criollas.push(new criolla(17,"../src/img/17.jpg","Gracia", "M1", 20500, "Abedul", "Natural"));
criollas.push(new criolla(18,"../src/img/18.jpg","Gracia", "Gold Psy", 105700, "Abeto", "Natural"));
criollas.push(new criolla(19,"../src/img/19.jpg","Gracia", "Godin Gold", 68000, "Caoba", "Azul petróleo"));
criollas.push(new criolla(20,"../src/img/20.jpg","Racker", "Criolla Clásica", 9999, "Pino", "Esfumado"));
criollas.push(new criolla(21,"../src/img/21.jpg","Racker", "2da Selección", 9999, "Pino", "Negro"));
criollas.push(new criolla(22,"../src/img/22.jpg","Fonseca", "15", 23600, "Abedul", "Natural"));
criollas.push(new criolla(23,"../src/img/23.jpg","La Andaluza", "M12", 16700, "Guatambú", "Azul Esfumado"));
criollas.push(new criolla(24,"../src/img/24.jpg","RDL", "36", 22500, "Pino", "Natural"));

// OPERADORES Y CONDICIONALES AVANZADOS - LO VOY A USAR A FUTURO PARA HACER UN FILTRO DE BÚSQUEDA POR MARCA Y PRECIO
const { marca, precio } = criolla

// DOM

const templateCriollas = document.querySelector("#contenedorCriollas")

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
          <button id="agregar-${par.id}" onclick="agregarAlCarrito(${par.id})" class="boton-agregar">COMPRAR</button>
        </div>
    `
    templateCriollas.append(div)
})