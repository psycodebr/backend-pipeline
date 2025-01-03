const app = require('./app');
const sequelize = require('./config/database');

// Inicializa o banco de dados e o servidor
const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza o banco com o modelo
    console.log('Database connected and models synced!');

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();