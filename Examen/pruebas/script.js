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
    const scheduleContainer = document.getElementById('jornadas');

    schedule.forEach((round, index) => {
        // Crear el div principal para cada jornada
        const primerDiv = document.createElement('div');
        primerDiv.className = 'text-center contenedor-jornada';

        // Crear el encabezado de la jornada
        const jornadaH3 = document.createElement('h3');
        jornadaH3.className = 'table-header mb-0';
        jornadaH3.innerHTML = `Jornada ${index + 1}`;
        primerDiv.appendChild(jornadaH3);

        // Crear la tabla para los partidos
        const tabla = document.createElement('table');
        tabla.className = 'table';
        tabla.style.tableLayout = 'fixed'; // Asegurar un diseño de tabla fijo
        tabla.style.width = '100%'; // Hacer que la tabla ocupe el 100% del ancho

        // Agregar los encabezados de la tabla
        tabla.innerHTML = `<thead>
            <tr>
                <th class="col-local" scope="col">Local</th>
                <th scope="col"></th>
                <th class="col-visitante" scope="col">Visitante</th>
            </tr>
        </thead>`;
        
        const tbody = document.createElement('tbody');

        round.forEach(match => {
            const row = document.createElement('tr');

            // Celda del equipo local con el logo
            const localCell = document.createElement('td');
            localCell.innerHTML = `${match.equipoLocal} <img src="${match.escudoLocal}" height="30px" width="30px">`;
            localCell.className = 'text-end';
            row.appendChild(localCell);

            // Celda del VS centrada
            const vsCell = document.createElement('td');
            vsCell.className = 'vs-column text-center'; // Añadir clase para estilo
            // vsCell.style.display = 'flex'; // Utilizar flexbox
            vsCell.style.justifyContent = 'center'; // Centrar horizontalmente
            vsCell.style.alignItems = 'center'; // Centrar verticalmente
            vsCell.style.height = '50px'; // Altura para centrar
            vsCell.textContent = 'VS';
            row.appendChild(vsCell);

            // Celda del equipo visitante con el logo
            const visitanteCell = document.createElement('td');
            visitanteCell.innerHTML = `<img class="text-start" src="${match.escudoVisitante}" height="30px" width="30px"> ${match.equipoVisitante}`;
            visitanteCell.className = 'text-start';
            row.appendChild(visitanteCell);

            tbody.appendChild(row);
        });

        tabla.appendChild(tbody);
        primerDiv.appendChild(tabla);
        scheduleContainer.appendChild(primerDiv);
    });
  })
  .catch((error) => console.error('Error fetching data:', error));

// CSS necesario para las proporciones de columnas
const style = document.createElement('style');
style.innerHTML = `
    .table {
        width: 100%; /* Asegura que la tabla ocupe el 100% del ancho del contenedor */
        table-layout: fixed; /* Usa el diseño de tabla fijo para mantener proporciones */
    }

    .col-local, .col-visitante {
        width: 45%; /* Asigna un 45% del ancho a las columnas de Local y Visitante */
    }

    .vs-column {
        width: 10%; /* Asigna un 10% del ancho a la columna VS */
    }

    .vs-column.text-center {
        vertical-align: middle; /* Centra el contenido verticalmente */
    }
`;
document.head.appendChild(style);





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
                // partidos.push({home: teams[home], away: teams[away]});
                partidos.push(new Partido(teams[home].nombre, teams[away].nombre, teams[home].escudo, teams[away].escudo));
            }
            else{
                // partidos.push({home: teams[away], away: teams[home]});
                partidos.push(new Partido(teams[away].nombre, teams[home].nombre, teams[away].escudo, teams[home].escudo));
            }
        }

        calendario.push(partidos);
        equipoIndexes.splice(1, 0, equipoIndexes.pop());
    }

    return calendario;
  }