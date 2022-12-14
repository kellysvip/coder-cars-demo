const express = require('express');
const { createCar } = require('../api/controllers/car/createCar');
const { deleteCar } = require('../api/controllers/car/deleteCar');
const { editCar } = require('../api/controllers/car/editCar');
const { getCars } = require('../api/controllers/car/getCars');

const router = express.Router();

// CREATE
router.post('/', createCar);

// READ
router.get('/', getCars);

// UPDATE
router.put('/:id', editCar);

// // DELETE
router.delete('/:id', deleteCar);

module.exports = router;
