const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const vehicleRoutes = require('./routes/vehicleRoutes');
const sequelize = require('./config/sequelize');


// Allow requests from any origin
app.use(cors());

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', vehicleRoutes);

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
