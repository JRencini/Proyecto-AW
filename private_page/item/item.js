import { itemComponent } from "../../components/articuloItem.js";
import { getData, setData } from "../../utils/localStorageController.js";

const itemContainer = document.getElementById('itemContainer');
const btnCart = document.getElementById('btnCart');
const url = new URL(window.location.href);
const itemId = Number(url.searchParams.get('id'));

let artTitle = null;
let artImg = null;
let artPrice = null;

function LlenarItem(art) {
  artTitle = art.titulo;
  artImg = art.imagen;
  artPrice = art.price;
  const item = itemComponent(art.titulo, art.imagen, art.text, art.price, art.fecha);
  itemContainer.innerHTML = item;
}

fetch('../../data/data.json')
  .then(res => res.json())
  .then(data => {
    let articuloEncontrado = null;

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

  
btnCart.addEventListener('click', (event) => { 

  if (confirm('¿Quiere agregar este artítulo al carrito?')) {
    const items = getData('itemsData') || [];
    const newIndex = items.length;   
    const newCant = document.getElementById('ph-cantidad').value;
    const newTotal = (artPrice * parseInt(newCant));

    const newItem = { id: newIndex, title: artTitle, img: artImg, price: artPrice, cant: newCant, total: newTotal };

    items.push(newItem);
    setData('itemsData', items);
    console.log('Item agregado:');

    window.location.href = "../cart/carrito.html"
  }
});