const Booking     = require('../models/Booking');
const VehicleType = require('../models/VehicleType');
const Vehicle     = require('../models/Vehicle')
const { Op } = require('sequelize');

exports.getVehicleTypes = async (req, res) => {
  try {
    const { category } = req.params;
    const vehicleTypes = await VehicleType.findAll({ where: { category } });
    res.status(200).json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const { typeId } = req.params;
    const vehicles = await Vehicle.findAll({ where: { typeId } });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

    const existingBooking = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.lte]: endDate },
            endDate: { [Op.gte]: startDate },
          },
        ],
      },
    });

    if (existingBooking) {
      return res.status(409).json({ message: 'Vehicle is already booked for the selected dates' });
    }

    const newBooking = await Booking.create({ firstName, lastName, vehicleId, startDate, endDate });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
