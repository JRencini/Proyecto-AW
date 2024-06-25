const formReg = document.getElementById('registro')
const btnReg = document.getElementById('btnRegistro')

window.addEventListener('load', () => {
  console.log(formReg.name)
})

formReg.addEventListener('submit', (e) => {

  let name = document.getElementById('name').value
  let lastname = document.getElementById('lastname').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let birthdate = document.getElementById('birthdate').value

  fetch('../data/user.json').then(res => res.json()).then(datos => {
    const verificacionEmail = datos.find(e => e.email == email)
    
    if (verificacionEmail) {
      /* Aca tengo que mandar un mensage diciendo que el email ya esta registrado */
    } else {
      /* Aca tengo que mandar los datos y registrarlos */
    }

  })
})