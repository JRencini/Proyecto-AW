const form = document.getElementById('login')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let userEmail = document.getElementById('email').value
  let userPass = document.getElementById('password').value

  fetch('../data/user.json').then(res => res.json()).then(users => {
    const user = users.find(e => e.email == userEmail && e.password == userPass)

    if (user) {

      sessionStorage.setItem('userData', JSON.stringify(user))
      console.log(user);
      window.location.href = 'http://127.0.0.1:5500/private_page/home/home.html'
    } else {
      const lblError = document.getElementById('lblError')
      lblError.textContent = "Error al ingresar los datos del usuario"
      lblError.style.display = 'block'
      lblError.classList.add('show')
      
      setTimeout(() => {
        lblError.classList.remove('show');
        setTimeout(() => {
          lblError.style.display = 'none';
        }, 1000);
      }, 3000)     
    }
  })

}) 