class Partido {
    constructor(equipoLocal, equipoVisitante, escudoLocal, escudoVisitante) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
        this.escudoLocal = escudoLocal;
        this.escudoVisitante = escudoVisitante;
    }
}

function mostrarEquipos() {
    fetch('./equipos.json') // Ensure the path to your JSON file is correct
        .then((response) => response.json())
        .then(data => {
            const dataOrdenada = ordenarTabla(data);
            generarCalendario(dataOrdenada);
        })
        .catch((error) => {
            console.error('Error fetching teams:', error);
        });
}

function ordenarTabla(equipos) {
    return equipos.sort((a, b) => b.puntos - a.puntos);
}

function generateRoundRobinSchedule(equipos) {
    const numEquipos = equipos.length;
    const jornadas = (numEquipos - 1) * 2;
    const mitadEquipos = numEquipos / 2;

    let calendario = [];

    let equipoIndexes = [...Array(numEquipos).keys()];

    for (let jornada = 0; jornada < jornadas; jornada++) {        

        for (let i = 0; i < mitadEquipos; i++) {
            const equipoLocal = equipoIndexes[i];
            const equipoVisitante = equipoIndexes[numEquipos - i - 1];

            partidos.push(new Partido(equipos[equipoLocal].nombre, equipos[equipoVisitante].nombre, equipos[equipoLocal].escudo, equipos[equipoVisitante].escudo));
        }
    }
}

function mostrarCalendario(partidos) {
    const calendarioContainer = document.getElementById('calendario');
    calendarioContainer.classList.add('d-flex', 'flex-column', 'align-items-center');
    calendarioContainer.innerHTML = ''; // Clear any existing content
    
    let jornadaCount = 1; // Initialize jornada counter

    partidos.forEach(partido => {
        const jornadaDiv = document.createElement('div');
        jornadaDiv.classList.add('text-center', 'w-50', 'border', 'border-primary', 'mt-3');

        // Generate random scores (example)
        const resultadoLocal = Math.floor(Math.random() * 5); // Random score for home team
        const resultadoVisitante = Math.floor(Math.random() * 5); // Random score for away team

        // Set up match header with dynamic jornada
        jornadaDiv.innerHTML = `
            <h2>Jornada ${jornadaCount}</h2>
            <div class="d-flex flex-column mx-auto p-3">
              <div class="d-flex justify-content-between">
                <p>Super Liga</p>
                <p>Finalizado</p>
              </div>
              <div class="d-flex justify-content-between">
                <div class="text-center">
                  <img src="${partido.escudoLocal}" class="escudo-img" />
                  <div><p>${partido.equipoLocal}</p></div>
                </div>
                <div class="text-center">
                  <h3>Resultado</h3>
                  <h2>${resultadoLocal} - ${resultadoVisitante}</h2>
                </div>
                <div class="text-center">
                  <img src="${partido.escudoVisitante}" class="escudo-img" />
                  <div><p>${partido.equipoVisitante}</p></div>
                </div>
              </div>
            </div>
            <div class="pb-3">
                <button class="btn btn-warning me-2">Editar</button>
                <button class="btn btn-warning me-2">Guardar</button>
                <button class="btn btn-warning">Generar Resultado</button>
            </div>
        `;

        calendarioContainer.appendChild(jornadaDiv);
        jornadaCount++;
    });
}

window.onload = mostrarEquipos;
