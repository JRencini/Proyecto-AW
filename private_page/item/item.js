import { itemComponent } from "../../components/articuloItem.js";

const itemContainer = document.getElementById('itemContainer')
const url = new URL(window.location.href);
const itemId = Number(url.searchParams.get('id'));

console.log(url)
console.log(itemId)

function LlenarItem(art) {
  const item = itemComponent(art.titulo, art.imagen, art.text, art.price, art.fecha)
  itemContainer.innerHTML = item
}

fetch('../../data/data.json')
  .then(res => res.json())
  .then(data => {
    let articuloEncontrado = null;

    console.log(articuloEncontrado)

    data.forEach(cat => {
      const articulo = cat.articulos.find(e => e.id === itemId);
      if (articulo) {
        articuloEncontrado = articulo;
      }
    });
    if (articuloEncontrado) {
      LlenarItem(articuloEncontrado);
      }
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });