const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares
app.use(express.json()); // Para interpretar JSON no body das requisições

// Rotas
app.use('/tasks', taskRoutes); // Base URL para as rotas de tarefas

// Rota padrão para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API To-Do List! Acesse /tasks para começar.');
});

// Exporta o app
module.exports = app;