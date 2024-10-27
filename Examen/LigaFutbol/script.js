function mostrarEquipos() {
    fetch('./equipos.json')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            const tabla = document.getElementById('tabla-equipos');
            tabla.innerHTML = '';

            data.forEach(equipo => {
                //Se crea la fila del equipo
                const fila = document.createElement('tr');

                // Escudo del equipo
                const celdaEscudo = document.createElement('td');
                celdaEscudo.textContent = equipo.escudo;
                fila.appendChild(celdaEscudo);

                // Nombre del equipo
                const celdaNombre = document.createElement('td');
                celdaNombre.textContent = equipo.nombre;
                fila.appendChild(celdaNombre);

                // Partidos jugados del equipo
                const celdaPartidosJugados = document.createElement('td');
                celdaPartidosJugados.textContent = equipo.partidos_jugados;
                fila.appendChild(celdaPartidosJugados);

                // Partidos ganados del equipo
                const celdaPartidosGanados = document.createElement('td');
                celdaPartidosGanados.textContent = equipo.partidos_ganados;
                fila.appendChild(celdaPartidosGanados);

                // Partidos empatados del equipo
                const celdaPartidosEmpatados = document.createElement('td');
                celdaPartidosEmpatados.textContent = equipo.partidos_empatados;
                fila.appendChild(celdaPartidosEmpatados);

                // Partidos perdidos del equipo
                const celdaPartidosPerdidos = document.createElement('td');
                celdaPartidosPerdidos.textContent = equipo.partidos_perdidos;
                fila.appendChild(celdaPartidosPerdidos);

                // Goles a favor del equipo
                const celdaGolesFavor = document.createElement('td');
                celdaGolesFavor.textContent = equipo.goles_favor;
                fila.appendChild(celdaGolesFavor);

                // Goles en contra del equipo
                const celdaGolesContra = document.createElement('td');
                celdaGolesContra.textContent = equipo.goles_contra;
                fila.appendChild(celdaGolesContra);

                // Diferencia de goles del equipo
                const celdaDiferenciaGoles = document.createElement('td');
                celdaDiferenciaGoles.textContent = equipo.diferenciaGoles;
                fila.appendChild(celdaDiferenciaGoles);

                // Puntos del equipo
                const celdaPuntos = document.createElement('td');
                celdaPuntos.textContent = equipo.puntos;
                fila.appendChild(celdaPuntos);

                const markup = `<li>${equipo.nombre}</li>`;
                document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
            });
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}