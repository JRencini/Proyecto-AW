import { navBar } from "./components/navbar.js";
import { getUser } from "./utils/sessionStorageController.js";
import { getData, setData } from "./utils/localStorageController.js";

const logout = (key) => {
  sessionStorage.removeItem(key)
}

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.querySelector('header');
  const pageName = document.getElementById('pageName').value;

  const userInfo = getUser('userData');
  const items = getData('itemsData');
  console.log(userInfo);
  console.log(items);

  navContainer.innerHTML = navBar;
  document.title = pageName;

  document.getElementById('btnLogout').addEventListener('click', () => {
    logout('userData');
    window.location.href = '/public_page/login.html';
  });
});

const AddButtons = () => {
  document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      const newImg = card.querySelector('.src-img').getAttribute('src');
      const newTitle = card.querySelector('.card-title').textContent;
      const newPrice = card.querySelector('.price').textContent;
      const newCant = card.querySelector('.form-control').value;
      const newTotal = (card.querySelector('.hiddenPrice').value * parseInt(newCant))

      const items = getData('itemsData') || [];
      const newIndex = items.length 

      const newItem = {id: newIndex ,title: newTitle, img: newImg, price: newPrice, cant: newCant, total: newTotal};
      items.push(newItem);
      setData('itemsData', items);
      console.log('Item agregado:', newItem);
    });
  });
};

export { AddButtons };

