import { articuloCard } from "../../components/articuloCart.js";
import { getData, setData } from "../../utils/localStorageController.js";

const btnDelete = document.getElementById('bntDelete')
  
function obtenerArticulos() {
  if (localStorage.getItem('itemsData')) {
    const carrito = JSON.parse(localStorage.getItem('itemsData'))
    return carrito
  }
  else {
    return []
  }
}

function mostrarArticulos() {
  const articulos = obtenerArticulos();
    console.log(articulos)
  const listaArticulos = document.getElementById('articulosContainer');
  
  articulos.forEach(articulo => {
    const newArticuloCard = articuloCard(articulo.title, articulo.img, articulo.cant, articulo.price, articulo.total)
    listaArticulos.innerHTML += newArticuloCard
  });
}

window.addEventListener('load', mostrarArticulos);

btnDelete.addEventListener('click', () => {
  const selectedItem = selectItems.value
  const items = getData('itemsData')
  const index = items.findIndex(e => e.title == selectedItem)
  items.splice(index, 1) 
  setData('itemsData', items)
})