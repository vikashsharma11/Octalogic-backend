const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const VehicleType = sequelize.define('VehicleType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false, // 'Car' or 'Bike'
  },
});

module.exports = VehicleType;
