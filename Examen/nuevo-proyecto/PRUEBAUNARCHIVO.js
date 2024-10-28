document.getElementById('guardarBtn').addEventListener('click', () => {
    const score1 = parseInt(document.querySelector('input[name="score1"]').value);
    const score2 = parseInt(document.querySelector('input[name="score2"]').value);
    const equipo1Nombre = "Barcelona"; // Reemplaza con el nombre del equipo 1
    const equipo2Nombre = "Bayern Munich"; // Reemplaza con el nombre del equipo 2

    fetch('/actualizar-puntos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ equipo1Nombre, equipo2Nombre, score1, score2 })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la actualización');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Muestra el mensaje de éxito
    })
    .catch(error => {
        console.error('Error:', error);
    });
});