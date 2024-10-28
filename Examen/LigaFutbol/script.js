class Partido {
    constructor(equipoLocal, equipoVisitante, escudoLocal, escudoVisitante) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
        this.escudoLocal = escudoLocal;
        this.escudoVisitante = escudoVisitante;
    }
}


function mostrarEquipos() {
    fetch('./equipos.json')
        .then((response) => response.json())
        .then(data => {
            const dataOrdenada = ordenarTabla(data);

            const tabla = document.getElementById('tabla-equipos');
            tabla.innerHTML = '';

            dataOrdenada.forEach(equipo => {
                const fila = document.createElement('tr');

                const celdaEscudo = document.createElement('td');
                const imagenEscudo = document.createElement('img');
                imagenEscudo.src = equipo.escudo;
                imagenEscudo.alt = `Escudo de ${equipo.nombre}`;
                imagenEscudo.style.width = '50px';
                imagenEscudo.style.height = '50px';
                celdaEscudo.appendChild(imagenEscudo);
                fila.appendChild(celdaEscudo);

                const celdaNombre = document.createElement('td');
                celdaNombre.textContent = equipo.nombre;
                fila.appendChild(celdaNombre);

                const celdaPartidosJugados = document.createElement('td');
                celdaPartidosJugados.textContent = equipo.partidos_jugados;
                fila.appendChild(celdaPartidosJugados);

                const celdaPartidosGanados = document.createElement('td');
                celdaPartidosGanados.textContent = equipo.partidos_ganados;
                fila.appendChild(celdaPartidosGanados);

                const celdaPartidosEmpatados = document.createElement('td');
                celdaPartidosEmpatados.textContent = equipo.partidos_empatados;
                fila.appendChild(celdaPartidosEmpatados);

                const celdaPartidosPerdidos = document.createElement('td');
                celdaPartidosPerdidos.textContent = equipo.partidos_perdidos;
                fila.appendChild(celdaPartidosPerdidos);

                const celdaGolesFavor = document.createElement('td');
                celdaGolesFavor.textContent = equipo.goles_favor;
                fila.appendChild(celdaGolesFavor);

                const celdaGolesContra = document.createElement('td');
                celdaGolesContra.textContent = equipo.goles_contra;
                fila.appendChild(celdaGolesContra);

                const celdaDiferenciaGoles = document.createElement('td');
                celdaDiferenciaGoles.textContent = equipo.diferenciaGoles;
                fila.appendChild(celdaDiferenciaGoles);

                const celdaPuntos = document.createElement('td');
                celdaPuntos.textContent = equipo.puntos;
                fila.appendChild(celdaPuntos);

                tabla.appendChild(fila);
            });

            generarCalendario(dataOrdenada);
        })
        .catch((error) => {
            console.log(error);
        });
}

function ordenarTabla(equipos) {
    return equipos.sort((a, b) => b.puntos - a.puntos);
}

function generarCalendario(equipos) {
    const calendario = [];
    for (let i = 0; i < equipos.length; i++) {
        for (let j = 0; j < equipos.length; j++) {
            if (i !== j) {
                calendario.push(new Partido(equipos[i].nombre, equipos[j].nombre, equipos[i].escudo, equipos[j].escudo));
            }
        }
    }
    console.log(calendario);
    mostrarCalendario(calendario);
}

function mostrarCalendario(partidos) {
    const calendarioContainer = document.getElementById('calendario');
    calendarioContainer.innerHTML = ''; // Clear any existing content

    partidos.forEach(partido => {
        // Create the outer match div
        const jornadaDiv = document.createElement('div');
        jornadaDiv.classList.add('text-center', 'w-50', 'border', 'border-primary', 'mt-3');
        
        // Set up match header
        jornadaDiv.innerHTML = `
            <h2>Jornada 1</h2>
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
                  <h2>4 - 1</h2>
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

        // Append the match div to the main container
        calendarioContainer.appendChild(jornadaDiv);
    });
}
window.onload = mostrarEquipos;


