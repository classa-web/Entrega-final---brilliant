
let contenedor = document.querySelector("#galeria");

fetch("js/potshots.json")
  .then(respuesta => respuesta.json())
  .then(postales => {
    postales.forEach(postal => {
      contenedor.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100">

            <img
              src="${postal.imagen}"
              class="card-img-top img-fluid"
              alt="${postal.titulo}"
            >

            <div class="card-body p-4">

              <p class="text-uppercase mb-2">
                Pot-Shot N.º ${postal.numero}
              </p>

              <h3 class="h4 mb-3">
                ${postal.titulo}
              </h3>

              <p class="card-text">
                ${postal.descripcion}
              </p>

            </div>
          </div>
        </div>
      `;
    });
  });
