import { cardComponent } from "../../components/card.js";

let cardContainer = document.getElementById('cardContainer')

let cardData = [
  { title: 'Titulo', img: '../../imagenes/productoejemplo.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '$ 2000' },
  { title: 'Titulo', img: '../../imagenes/productoejemplo.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '$ 2000' },
  { title: 'Titulo', img: '../../imagenes/productoejemplo.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '$ 2000' },
  { title: 'Titulo', img: '../../imagenes/productoejemplo.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '$ 2000' },
  { title: 'Titulo', img: '../../imagenes/productoejemplo.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '$ 2000' }
]

window.addEventListener('load', () => {
  const cards = cardData.map(e => {
    return cardComponent(e.title, e.img, e.text, e.price)
  }).join('')

  cardContainer.innerHTML = cards
})