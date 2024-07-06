import { articuloCard } from "../../components/articuloCart.js";


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
  const carritoVacio = document.getElementById('carrito-vacio')
  const btnVaciar = document.getElementById('vaciar-carrito')
  const lblTotal = document.getElementById('total');
  const btnComprar = document.getElementById('comprar-carrito')

  if (articulos.length === 0) {

    carritoVacio.style.display = 'block';
    btnVaciar.style.display = 'none';
    lblTotal.style.display = 'none';
    btnComprar.style.display = 'none';

    listaArticulos.innerHTML = '';
  } else {

    carritoVacio.style.display = 'none';
    btnVaciar.style.display = 'block';
    lblTotal.style.display = 'block';
    btnComprar.style.display = 'block';

    let total = 0
    listaArticulos.innerHTML = '';

    articulos.forEach(articulo => {
      total += articulo.total;
      const newArticuloCard = articuloCard(articulo.id, articulo.title, articulo.img, articulo.cant, articulo.price, articulo.total)
      listaArticulos.innerHTML += newArticuloCard;      
    });

    lblTotal.textContent = `Total: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
  }

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

const btnVaciar = document.getElementById('vaciar-carrito')
btnVaciar.addEventListener('click', () => {
  if (confirm('¿Esta seguro de quitar todos los elementos del carrito?')) {
      localStorage.clear()
      mostrarArticulos(); 
    }
})

const btnComprar = document.getElementById('comprar-carrito')
btnComprar.addEventListener('click', () => {
  if (confirm('¿Desea comprar los articulos del carrito?')) {
    alert("Gracias por su compra :)");
    localStorage.clear()
    mostrarArticulos(); 
  }
})

window.addEventListener('load', mostrarArticulos);
