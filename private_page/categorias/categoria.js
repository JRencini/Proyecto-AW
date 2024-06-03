const categoryContainer = document.getElementById('categoryContainer');
const categoria = document.getElementById('pageName');
  
import { cardComponent } from "../../components/card.js";
console.log(categoria.value)

function renderCardsCategory(categories) {
  const categoriesHTML = categories.map(category => { 
    const cardsHTML = category.articulos.map(item => cardComponent(item.titulo, item.imagen, item.text, item.price)).join('');
    return `
      <div class="my-5">
        <div class="card">
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
}

fetch('../../data/data.json').then(res => res.json()).then(data => {

    const dataFiltrada = data.filter(e => e.categoria == categoria.value);
    console.log(dataFiltrada)
    console.log(data);
    renderCardsCategory(dataFiltrada);
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });
