const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const VehicleType = require('./VehicleType');

const Vehicle = sequelize.define('Vehicle', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeId: {
    type: DataTypes.INTEGER,
    references: {
      model: VehicleType,
      key: 'id',
    },
  },
});

Vehicle.belongsTo(VehicleType, { foreignKey: 'typeId' });
module.exports = Vehicle;
