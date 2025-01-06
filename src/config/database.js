const { Sequelize } = require('sequelize');

// Configuração da conexão com o SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Caminho do arquivo SQLite
    logging: false, // Desativa logs do Sequelize
});

module.exports = sequelize;