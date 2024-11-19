require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON
app.use(express.static('public')); // Serve static files

// Routes
app.use('/api/users', require('./src/routes/userRoutes'));

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './src/views');
