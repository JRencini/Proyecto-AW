import { navBar } from "./components/navbar.js";

let navContainer = document.querySelector('header');
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', () => {
  navContainer.innerHTML = navBar;
  document.title = pageName

  let boton = document.getElementById('btnLogout');
  if (boton) {
    boton.addEventListener('click', () => {
      window.location.href = '/public_page/login.html';
    });
  }
});