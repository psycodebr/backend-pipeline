const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware para CORS
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/tasks', taskRoutes);

// Rota padrão
app.get('/', (req, res) => {
    res.send('Bem-vindo à API To-Do List! Acesse /tasks para começar.');
});

module.exports = app;
