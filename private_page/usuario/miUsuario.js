
function mostrarUsuario() {
  const usuario = JSON.parse(sessionStorage.getItem('userData'));
  if (usuario && usuario.nombre && usuario.apellido) {
    let nombreUsu = document.getElementById('usu-nombre');
    let mailUsu = document.getElementById('usu-mail');
    let fechaUsu = document.getElementById('usu-fecha');

    if (nombreUsu) {
      nombreUsu.textContent = `${usuario.nombre} ${usuario.apellido}`;
    }

    if (mailUsu) {
      mailUsu.textContent = usuario.email; 
    }

    if (fechaUsu) {
      fechaUsu.textContent = usuario.fechaNacimiento; 
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarUsuario()
});
