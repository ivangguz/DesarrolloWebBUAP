const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para obtener los equipos
app.get('/equipos', (req, res) => {
    fs.readFile(path.join(__dirname, 'equipos.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo.');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para actualizar puntos
app.post('/actualizar-puntos', (req, res) => {
    const { equipo1Nombre, equipo2Nombre, score1, score2 } = req.body;

    fs.readFile(path.join(__dirname, 'equipos.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo.');
        }
        
        const equipos = JSON.parse(data);
        const equipo1 = equipos.find(e => e.nombre === equipo1Nombre);
        const equipo2 = equipos.find(e => e.nombre === equipo2Nombre);

        if (!equipo1 || !equipo2) {
            return res.status(404).send('Uno de los equipos no fue encontrado.');
        }

        // Actualiza los puntos
        equipo1.partidos_jugados++;
        equipo2.partidos_jugados++;

        if (score1 > score2) {
            equipo1.puntos += 3;
            equipo1.partidos_ganados++;
            equipo2.partidos_perdidos++;
        } else if (score1 < score2) {
            equipo2.puntos += 3;
            equipo2.partidos_ganados++;
            equipo1.partidos_perdidos++;
        } else {
            equipo1.puntos += 1;
            equipo2.puntos += 1;
            equipo1.partidos_empatados++;
            equipo2.partidos_empatados++;
        }

        // Guarda los datos actualizados en el archivo JSON
        fs.writeFile(path.join(__dirname, 'equipos.json'), JSON.stringify(equipos, null, 2), err => {
            if (err) {
                return res.status(500).send('Error al guardar los datos.');
            }
            res.send('Puntos actualizados correctamente.');
        });
    });
});

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Servir archivos estáticos (como imágenes)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
