import { cardComponent } from "../../components/card.js";
import { ingresosConst } from "../../components/ingresosNuevos.js";
import { AddButtons } from "../../index.js";

const categoryContainer = document.getElementById('categoryContainer');
const ingresosContainer = document.getElementById('ingresosContainer')
let idUsuario = ""
if (sessionStorage.getItem('userData')) {
  idUsuario = JSON.parse(sessionStorage.getItem('userData')).id
}

function renderCardsCategory(categories) {
  const categoriesHTML = categories.map(category => {
    const cardsHTML = category.articulos.map(item => cardComponent(item.id, item.titulo, item.imagen, item.text, item.price)).join('');
    return `
      <div class="my-5 d-flex justify-content-center">
        <div class="card col-10">
          <div class="card-header">
            <h2>${category.categoria}</h2>
          </div>
          <div class="card-body">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
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
  let ingresoHTML = '';
  for (let i = 0; i < 20; i += 4) {
    const chunk = ingresos.slice(i, i + 4);
    const cardsHTML = chunk.map(item => cardComponent(item.id, item.titulo, item.imagen, item.text, item.price)).join('');
    
    ingresoHTML += `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          ${cardsHTML}
        </div>
      </div>
    `;
  }
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
      .slice(0, 20);
    
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