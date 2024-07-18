export const articuloCard = (id, title, img, cant, price, total) => {
  const formattedPrice = price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  const formattedTotal = total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return `
    <li class="list-group-item" data-id="${id}">
      <div class="row">
        <div class="col-md-4 col-12 d-flex align-items-center mb-3">
          <img src="${img}" alt="" class="me-3">
          <div class="fs-4">
            ${title}
          </div>
        </div>
        <div class="col-md-4 col-12 d-flex align-items-center mb-3">
          <p class="price fs-5 m-auto">${formattedPrice} x ${cant}</p>
        </div>
        <div class="col-md-4 col-12 d-flex align-items-center mb-3">
          <p class="price fs-5 ms-auto">${formattedTotal}</p>
          <button class="btn btn-danger ms-3 btn-delete" data-id="${id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
        </div>       
      </div>     
    </li>`;
};
