export const itemComponent = (title, img, text, price, fecha) => {
  const formattedPrice = price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return `     
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-7">
                <img src="${img}" alt="" 
                class="img" width="700px" height="700px" >
              </div>
              <div class="col-md-5">
                <h1>${title}</h1>
                <p class="text-secondary">Publicado el ${fecha}</p>
                <h4 class="price">${formattedPrice}</h4>
                <h5 class="mt-5 mx-auto">${text}</h5>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex ms-auto align-items-center justify-content-end">
              <button id="btnCart" class="btn btn-success"> 
                <h5>Agregar al carrito 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </h5>
              </button>
            </div>
          </div>
        </div>
      </div>`;
};
  