const categoryContainer = document.getElementById('categoryContainer');
const ingresosContainer = document.getElementById('ingresosContainer')
let idUsuario = ""
if (sessionStorage.getItem('userData')) {
  idUsuario = JSON.parse(sessionStorage.getItem('userData')).id
}

import { cardComponent } from "../../components/card.js";
import { ingresosConst } from "../../components/ingresosNuevos.js";
import { notificacionConst } from "../../components/notificaciones.js"
import { AddButtons } from "../../index.js";

function renderCardsCategory(categories) {
  const categoriesHTML = categories.map(category => {
    const cardsHTML = category.articulos.map(item => cardComponent(item.id, item.titulo, item.imagen, item.text, item.price)).join('');
    return `
      <div class="my-5">
        <div class="card">
          <div class="card-header">
            <h2>${category.categoria}</h2>
          </div>
          <div class="card-body">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
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

function renderIngresos(ingresos) {
  const ingresoHTML = ingresos.map(i => ingresosConst(i.fecha, i.titulo)).join('');
  ingresosContainer.innerHTML = ingresoHTML;
}

fetch('../../data/data.json')
  .then(res => res.json())
  .then(data => {
    let todosArticulos = [];
    data.forEach(categoria => {
      todosArticulos = todosArticulos.concat(categoria.articulos);
    });

    const articulosNuevos = todosArticulos
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      .slice(0, 3);

    renderIngresos(articulosNuevos);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });


  fetch('../../data/data.json').then(res => res.json()).then(data => {
    renderCardsCategory(data);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });
