const URL_BASE = 'https://digimon-api.vercel.app';
const URL_DIGIMON = URL_BASE + '/api/digimon';
let contenido = document.getElementById("contenido");
let datosGlobal;

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


function capturaDato( ) {
    
}

    
fetch(URL_DIGIMON)
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        tabla(datos);
    });

