const categoryContainer = document.getElementById('categoryContainer');
const notificacionContainer = document.getElementById('notificacionContainer')
const idUsuario = JSON.parse(sessionStorage.getItem('userData')).id
console.log(idUsuario)
import { cardComponent } from "../../components/card.js";
import { notificacionConst } from "../../components/notificaciones.js"
import { AddButtons } from "../../index.js";

function renderCardsCategory(categories) {
  const categoriesHTML = categories.map(category => {
    const cardsHTML = category.articulos.map(item => cardComponent(item.titulo, item.imagen, item.text, item.price)).join('');
    return `
      <div class="my-5">
        <div class="card">
          <div class="card-header">
            <h2>${category.categoria}</h2>
          </div>
          <div class="card-body">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              ${cardsHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  categoryContainer.innerHTML = categoriesHTML;
  AddButtons();
}

function renderNotificacion(notificaciones) {
  const notificacionHTML = notificaciones.map(i => notificacionConst(i.id, i.fecha, i.desc)).join('');
  notificacionContainer.innerHTML = notificacionHTML;
}

fetch('../../data/data.json').then(res => res.json()).then(data => {
    renderCardsCategory(data);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

fetch('../../data/notificaciones.json').then(res => res.json()).then(data => {
    const dataFiltrada = data.filter(e => e.idUsuario == idUsuario);
    renderNotificacion(dataFiltrada);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });