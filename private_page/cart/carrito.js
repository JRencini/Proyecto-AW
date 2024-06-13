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
  const listaArticulos = document.getElementById('articulosContainer');
  listaArticulos.innerHTML = '';

  articulos.forEach(articulo => {
    const newArticuloCard = articuloCard(articulo.id, articulo.title, articulo.img, articulo.cant, articulo.price, articulo.total)
    listaArticulos.innerHTML += newArticuloCard;
  });

  document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', eliminarArticulo);
  });
}

function eliminarArticulo(event) {
  const button = event.target.closest('.btn-delete');
  const id = parseInt(button.getAttribute('data-id'));
  let articulos = obtenerArticulos();
  articulos = articulos.filter(articulo => articulo.id !== id);
  localStorage.setItem('itemsData', JSON.stringify(articulos));
  mostrarArticulos(); 
}

window.addEventListener('load', mostrarArticulos);
