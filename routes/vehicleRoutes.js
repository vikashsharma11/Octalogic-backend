const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/vehicleType/:category', vehicleController.getVehicleTypes);
router.get('/vehicles/:typeId', vehicleController.getVehicles);
router.post('/booking', vehicleController.createBooking);

module.exports = router;
