const mongoose = require("mongoose");
const { sendResponse, AppError } = require("../../../helpers/utils");
const Car = require("../../../models/Car");


const createCar = async (req, res, next) => {
  
  try {
    const info =  req.body
    if (!info) throw new AppError(402, "Bad Request", "Create Car Error");

    //mongoose query
    const created = await Car.create(info);
    sendResponse(res, 200, true, { car: created }, null, "Create Car Success");
  } catch (err) {
    next(err);
  }
}

module.exports = { createCar };
