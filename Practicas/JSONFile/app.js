const express = require('express');
const path = require('path');
const fs = require('fs'); // Import the file system module
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

s

// Ruta para obtener los usuarios
app.get('/usuarios', (req, res) => {
    fs.readFile('usuarios.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo');
        }
        res.send(data);
    });
});

// Ruta para agregar el nuevo usuario
app.post('/usuarios', (req, res) => {
    const newUser = req.body;

    // Lee los usuarios existentes
    fs.readFile('usuarios.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo');
        }

        // Parsea los usuarios existentes
        let usuarios = JSON.parse(data);
        
        // Agrega el nuevo usuario
        usuarios.push(newUser);

        // Escribe de vuelta al archivo JSON, usamos null y 2 para que se idente y sea posible su lectura y mas facil
        fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al escribir el archivo');
            }
            res.status(201).send(newUser); // Respond with the new user
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
