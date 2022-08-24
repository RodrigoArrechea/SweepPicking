// EVENTO FORM
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
  
const form = document.querySelector('#formulario')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputMail = document.querySelector('#input-mail')

const baseDeDatos = []

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const mail = inputMail.value

    if (nombre.length < 5 || apellido.length < 5 || mail.length < 5) {
    Swal.fire("Datos inválidos.")
     return
    }

    const user = {
        nombre: nombre, 
        apellido: apellido, 
        mail: mail,
    }

    baseDeDatos.push(user)

    localStorage.setItem("Clientes", JSON.stringify(baseDeDatos))

    // OPERADORES Y CONDICIONALES AVANZADOS
    console.log(...baseDeDatos)

    form.reset()
})