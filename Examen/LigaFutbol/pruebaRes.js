class Partido {
    constructor(equipoLocal, equipoVisitante, escudoLocal, escudoVisitante) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
        this.escudoLocal = escudoLocal;
        this.escudoVisitante = escudoVisitante;
    }


}

let equiposData = [];

fetch('./equipos.json')
  .then((response) => response.json())
  .then((data) => {
    equiposData = data;

    const schedule = generarRoundRobinCalendario(equiposData);
    const scheduleContainer = document.getElementById('partidos');

    // Generar el HTML para cada jornada
    schedule.forEach((jornada, index) => {
      const jornadaDiv = document.createElement('div');
      jornadaDiv.classList.add('jornada'); // Agregamos una clase para el estilo, si lo deseas
      jornadaDiv.innerHTML = `<h1 class="fondo-azul letras-amarillas text-center p-3 bebas-neue-regular mb-0 mt-5" style="font-size: 50px;">Jornada ${index + 1}</h1>`;
      const divRow = document.createElement('div');
      divRow.classList.add('d-flex', 'flex-wrap', 'g-5');
      jornadaDiv.appendChild(divRow);    


      jornada.forEach(partido => {
        const partidoDiv = `
          <div class="col-md-6">
            <div class="text-center border border-primary mt-3 fondo-blanco mx-auto">
              <h2 class="table-light">Jornada ${index + 1}</h2>
              <div class="d-flex flex-column mx-auto p-3">
                <div class="d-flex justify-content-between">
                  <p>Super Liga</p>
                  <p>Finalizado</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="text-center">
                    <img src="${partido.escudoLocal}" class="escudo-img" alt="${partido.equipoLocal} Escudo" />
                    <div>
                      <p>${partido.equipoLocal}</p>
                    </div>
                  </div>
                  <div class="text-center">
                    <form class="d-flex align-items-center flex-column">
                      <h3>Resultado</h3>
                      <div class="d-flex flex-row">
                        <input type="number" name="score1" class="form-control mx-2" style="width: 50px;" value="0" />
                        <h2>-</h2>
                        <input type="number" name="score2" class="form-control mx-2" style="width: 50px;" value="0" />
                      </div>
                    </form>
                  </div>
                  <div class="text-center">
                    <img src="${partido.escudoVisitante}" class="escudo-img" alt="${partido.equipoVisitante} Escudo" />
                    <div>
                      <p>${partido.equipoVisitante}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pb-3">
                <button class="btn btn-warning me-2" data-action="edit">Editar</button>
                <button class="btn btn-warning me-2" data-action="save">Guardar</button>
                <button class="btn btn-warning" data-action="generate">Generar Resultado</button>
              </div>
            </div>
          </div>
        `;
        divRow.innerHTML += partidoDiv; // Añadir el partido al HTML de la jornada
      });

      scheduleContainer.appendChild(jornadaDiv); // Añadir la jornada al contenedor principal
    });
  })
  .catch((error) => console.error('Error extrayendo datos:', error));



function generarRoundRobinCalendario(teams){
    const numEquipos = teams.length;
    const jornadas = (numEquipos - 1) * 2;
    const partidosPorJornada = numEquipos / 2;

    let calendario = [];

    let equipoIndexes = [...Array(numEquipos).keys()];

    for (let jornada = 0; jornada < jornadas; jornada++){
        let partidos = [];

        for (let partido = 0; partido < partidosPorJornada; partido++){
            let home = equipoIndexes[partido];
            let away = equipoIndexes[numEquipos - 1 - partido];

            if (jornada % 2 === 0){
                partidos.push(new Partido(teams[home].nombre, teams[away].nombre, teams[home].escudo, teams[away].escudo));
            }
            else{
                partidos.push(new Partido(teams[away].nombre, teams[home].nombre, teams[away].escudo, teams[home].escudo));
            }
        }

        calendario.push(partidos);
        equipoIndexes.splice(1, 0, equipoIndexes.pop());
    }

    return calendario;
  }