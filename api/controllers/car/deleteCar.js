const mongoose = require("mongoose");
const { sendResponse } = require("../../../helpers/utils");
const Car = require("../../../models/Car");

const deleteCar = async (req, res, next) => {
  try {
    const carId = req.params;
        
    const options = { isDeleted: true };
    
    const updated = await Car.findByIdAndDelete(carId.id, options);

    // let updated = await Car.findByIdAndUpdate(carId.id, options);
    //  updated = await Car.findByIdAndUpdate(carId.id, options);

    sendResponse(res, 200, true, { data: updated }, null, "Delete Car success");
  } catch (error) {
    next(error)
  }
}

module.exports = { deleteCar };