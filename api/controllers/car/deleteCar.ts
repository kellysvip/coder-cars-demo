import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { sendResponse } from "../../../helpers/utils";
import { Car } from "../../../models/Car";

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
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