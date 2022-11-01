const mongoose = require("mongoose");
const { sendResponse } = require("../../../helpers/utils");
const Car = require("../../../models/Car");

const editCar = async (req, res, next) => {
  try {
    const carId = req.params;
    
    const updateInfo = req.body;
    console.log(updateInfo)
    // const options = { new: true };
    
    const updated = await Car.findByIdAndUpdate(carId.id, updateInfo);

    sendResponse(res, 200, true, { data: updated }, null, "Update Car success");
  } catch (error) {
    next(error)
  }
};

module.exports = { editCar };
