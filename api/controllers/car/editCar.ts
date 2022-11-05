import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { sendResponse } from "../../../helpers/utils";
import { Car } from "../../../models/Car";

const editCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const carId = req.params;
    
    const updateInfo = req.body;
    console.log(updateInfo)
    // const options = { new: true };
    
    const updated = await Car.findByIdAndUpdate(carId.id, updateInfo);

    sendResponse(res, 200, true, { updated }, null, "Update Car success");
  } catch (error) {
    next(error)
  }
};

module.exports = { editCar };
