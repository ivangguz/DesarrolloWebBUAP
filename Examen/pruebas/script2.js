function mostrarDatos(){
  fetch('./equipos.json')
    .then((response) => response.json())
    .then(data => {
        const myJSON = JSON.stringify(data);
        console.log(myJSON);
    })
}

window.onload = mostrarDatos;