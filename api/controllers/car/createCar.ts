import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError } from "../../../helpers/utils";
import { Car } from "../../../models/Car";

export const createCar = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const info = req.body;
    if (!info) throw new AppError(402, "Bad Request", "Create Car Error");

    //mongoose query
    const created = await Car.create(info);
    sendResponse(res, 200, true, { created }, null, "Create Car Success");
  } catch (err) {
    next(err);
  }
};


