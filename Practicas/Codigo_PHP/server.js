const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir index.html desde la carpeta src/views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Configura el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
