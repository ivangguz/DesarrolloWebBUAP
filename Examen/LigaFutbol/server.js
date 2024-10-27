const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Serve static files

// Set up the default route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servidor a la pagina principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
