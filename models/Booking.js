const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Vehicle = require('./Vehicle');

const Booking = sequelize.define('Booking', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Vehicle,
      key: 'id',
    },
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId' });
module.exports = Booking;
