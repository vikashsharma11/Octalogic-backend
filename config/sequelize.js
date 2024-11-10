const { Sequelize } = require('sequelize');
const config = require('./config'); // Import config file

const environment = process.env.NODE_ENV || 'development'; // Sets environment to 'development' if NODE_ENV is not set
const dbConfig = config[environment]; // Selects the database configuration for the current environment

// Initializes Sequelize with the connection URL and specified dialect options
const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
});

module.exports = sequelize; // Exports the configured Sequelize instance
