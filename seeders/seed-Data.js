'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert initial data into VehicleTypes table
    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Hatchback', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'SUV', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sedan', category: 'Car', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cruiser', category: 'Bike', createdAt: new Date(), updatedAt: new Date() },
    ]);

    // Insert initial data into Vehicles table
    await queryInterface.bulkInsert('Vehicles', [
      { name: 'Tata Tiago', typeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Renault Kwid', typeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toyota Glanza', typeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Volkswagen Taigun', typeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda Elevate', typeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Skoda Kushaq', typeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hyundai Verna', typeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda City', typeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mercedes-Benz E-Class', typeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Royal Enfield Classic 350', typeId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'TVS Ronin', typeId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Harley-Davidson X440', typeId: 4, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all data from Vehicles and VehicleTypes tables
    await queryInterface.bulkDelete('Vehicles', null, {});
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
