// EVENTO FORM
  
const form = document.querySelector('#formulario')
const inputMail = document.querySelector('#newsletter1')

const baseDeDatos = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const mail = inputMail.value

    if (mail.length < 5) {
    Swal.fire("Datos inválidos.")
     return
    }

    const user = {
        mail: mail,
    }

    baseDeDatos.push(user)

    Swal.fire(
        '¡Datos ingresados!',
        'Gracias por ser parte de nuestra comunidad.',
        'success',
      )

    localStorage.setItem("Clientes", JSON.stringify(baseDeDatos))

    // OPERADORES Y CONDICIONALES AVANZADOS
    console.log(...baseDeDatos)

    form.reset()
})