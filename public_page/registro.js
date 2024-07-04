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
      alert("El email ya está registrado.");
    } else {
      let newId = datos.length > 0 ? Math.max(...datos.map(user => user.id)) + 1 : 1;
        
      const nuevoUsuario = { id: newId, name: name, lastname: lastname, email: email, password: password, birthdate: birthdate };
      
      datos.push(nuevoUsuario)
      fetch('../data/user.json', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(datos)
      }).then(respuesta => {
        if (respuesta.ok) {
          alert("Usuario registrado con éxito.");
        } else {
          alert("Hubo un error al registrar el usuario.");
        }
      }).catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al registrar el usuario.");
      });
    }
  })
})