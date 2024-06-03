export const cardComponent = (title, img, text, price) => {
  
  const formattedPrice = price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return `
  <div class="col"> 
    <div class="card">
      <img src= "${img}" alt="">
      <div class="card-body">
        <h5 class="card-title">
          ${title}
        </h5>
        <p class="card-text">
          ${text}
        </p>
      </div>
      <div class="card-footer">
        <div class="row text-center">
          <div class="col">
            <p class="price">
              ${formattedPrice}
            </p>
          </div>
          <div class="col">
            <input type="number" class="form-control" min="0" max="5" placeholder="0" step="1"></input>
          </div>
        </div>
      </div>
    </div>
  </div>`
};