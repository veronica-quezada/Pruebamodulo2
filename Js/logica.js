const URL_BASE = 'https://digimon-api.vercel.app';
const URL_DIGIMON = URL_BASE + '/api/digimon';
let contenido = document.getElementById("contenido");
let carta;

function tabla(datos) {
    console.log ("contenido:",contenido);
    contenido.innerHTML = "" ;

    for (let temp of datos) {
        console.log ("temp:",temp);
        contenido.innerHTML += `<tr>
            <th scope="row">${temp.name}</ th> 
            <td><img width="80px" height="80px" src="${temp.img}"></td> 
            <td>${temp.level}</td>
        </tr> `;
        if (temp.id == 10) { 
            break;
        }
    }
}

function tarjeta(data) {
        carta.innerHTML = "";
    for (let temp of datos) {
        carta.innerHTML += ` 
          <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
          <p class="card-text">ESPECIE: "${temp.species}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }
}


function capturaDato( ) {
    let buscarDigimon = document.getElementById("dato").value;
    buscarDigimon = buscarDigimon.toLowerCase();
    document.getElementById("tabla_principal").style.display = "none";
    
    fetch(URL_DIGIMON + '/:name' + buscarDigimon)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        carta(datos);
    });
}

$(document).ready(function () {
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");
    
fetch(URL_DIGIMON)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        tabla(datos);
    });
});
