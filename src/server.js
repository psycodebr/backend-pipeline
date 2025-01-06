const app = require('./app');
const sequelize = require('./config/database');

// Inicializa o banco de dados e o servidor
const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza o banco com o modelo
    console.log('Database connected and models synced!');

    const port = process.env.PORT || 3001; // Define a porta, priorizando a variável de ambiente
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
