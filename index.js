import { navBar } from "./components/navbar.js";
import { getData } from "./utils/sessionStorageController.js";

const logout = (key) => {
  sessionStorage.removeItem(key)
}

let navContainer = document.querySelector('header');
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', () => {
  const userInfo = getData('userData')
  console.log(userInfo)
  navContainer.innerHTML = navBar;
  document.title = pageName

  document.getElementById('btnLogout').addEventListener('click', () => {
    logout('userData')
    window.location.href = '/public_page/login.html';
  });
});