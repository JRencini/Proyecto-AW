const notificacionContainer = document.getElementById('notificacionContainer')
const idUsuario = JSON.parse(sessionStorage.getItem('userData')).id

import { notificacionConst } from "../../components/notificaciones.js"

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

function renderNotificacion(notificaciones) {
  const notificacionHTML = notificaciones.map(i => notificacionConst(i.id, i.fecha, i.desc)).join('');
  notificacionContainer.innerHTML = notificacionHTML;
}

fetch('../../data/notificaciones.json')
  .then(res => res.json())
  .then(data => {
    const dataFiltrada = data
      .filter(e => e.idUsuario == idUsuario)
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)) 
      .slice(0, 20); 
    renderNotificacion(dataFiltrada);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });
  