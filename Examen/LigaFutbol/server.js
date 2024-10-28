const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.json());
app.use(express.static(__dirname)); // Servir archivos estáticos

// Configurar la ruta predeterminada a index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Ruta para reiniciar la tabla de equipos
app.get('/equipos_original.json', (req, res) => {
  fs.readFile('equipos_original.json', 'utf8', (err, data) => {
      if (err) {
          res.status(500).send('Error al leer el archivo');
          return;
      }
      res.send(data);
  });
});

// Ruta para actualizar el archivo equipos.json
app.put('/equipos.json', (req, res) => {
  fs.writeFile('equipos.json', JSON.stringify(req.body, null, 2), 'utf8', (err) => {
      if (err) {
          res.status(500).send('Error al escribir el archivo');
          return;
      }
      res.send('Archivo actualizado correctamente');
  });
});

// Ruta para actualizar los equipos
app.post('/updateEquipos', (req, res) => {
  const equiposActualizados = req.body;

  fs.writeFile('./equipos.json', JSON.stringify(equiposActualizados, null, 2), (err) => {
    if (err) {
      console.error('Error guardando datos:', err);
      return res.status(500).send('Error guardando datos');
    }
    res.send({ message: 'Datos actualizados correctamente' });
  });
});

