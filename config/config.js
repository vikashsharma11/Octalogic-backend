require('dotenv').config(); // Loads environment variables from .env file

module.exports = {
  development: {
    // Uses DATABASE_URL environment variable for database connection string
    url: process.env.DATABASE_URL,
    dialect: 'mysql', // Specifies MySQL as the dialect
    dialectOptions: {
      ssl: {
        require: true, // Enforces SSL for secure connection
        rejectUnauthorized: false, // Disables SSL certificate validation
      },
    },
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
