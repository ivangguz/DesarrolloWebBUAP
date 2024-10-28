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