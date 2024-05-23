const navElements = [
  {title: 'Accesorios', link: '../categorias/catAccesorios.html'},
  {title: 'Hardware', link: '../categorias/catHardware.html'},
  { title: 'Software', link: '../categorias/catSoftware.html' },
]


export const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid">
        <a class="navbar-brand" href="../home/home.html">
          <img src="../imagenes/ICONO.png" alt="HardWhere?" class="me-2" width="35px" >
          HardWhere?
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <spam class="navbar-toggler-icon"></spam>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav">
            ${
              navElements.map(e => {
                return `
                <li class="nav-item">
                    <a class="nav-link active" href=${e.link}>${e.title}</a>
                </li>
                `
              }).join('')
            }
          </ul>
          <button id="btnLogout" class="btn btn-danger ms-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>`

