export const itemComponent = (title, img, text, price, fecha) => {
  const formattedPrice = price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return `
            <div class="row">
              <div class="col-md-7">
                <img src="${img}" alt="" 
                class="img" class="img-fluid" style="max-width: 100%; height: auto;" >
              </div>
              <div class="col-md-5">
                <h1>${title}</h1>
                <p class="text-secondary">Publicado el ${fecha}</p>
                <h4 class="price">${formattedPrice}</h4>
                <h5 class="mt-5 mx-auto">${text}</h5>
              </div>
            </div>`;
};
  