class Partido {
    constructor(equipoLocal, equipoVisitante) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
    }
}

function mostrarEquipos() {
    fetch('./equipos.json')
        .then((response) => response.json())
        .then(data => {
            const tabla = document.getElementById('tabla-equipos');
            tabla.innerHTML = '';

            data.forEach(equipo => {
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

            generarCalendario(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function generarCalendario(equipos) {
    const calendario = [];
    for (let i = 0; i < equipos.length; i++) {
        for (let j = 0; j < equipos.length; j++) {
            if (i !== j) {
                calendario.push(new Partido(equipos[i].nombre, equipos[j].nombre));
            }
        }
    }
    mostrarCalendario(calendario);
}

function mostrarCalendario(calendario) {
    const tablaCalendario = document.getElementById('tabla-calendario');
    tablaCalendario.innerHTML = '';

    calendario.forEach(partido => {
        const fila = document.createElement('tr');

        const celdaLocal = document.createElement('td');
        celdaLocal.textContent = `Local: ${partido.equipoLocal}`;
        fila.appendChild(celdaLocal);

        const celdaVisitante = document.createElement('td');
        celdaVisitante.textContent = `Visitante: ${partido.equipoVisitante}`;
        fila.appendChild(celdaVisitante);

        tablaCalendario.appendChild(fila);
    });
}

window.onload = mostrarEquipos;


