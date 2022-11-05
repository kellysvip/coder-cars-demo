// import { NextFunction, Request, Response } from "express";
// import mongoose from "mongoose";
// import { sendResponse } from "../../../helpers/utils";
// import { Car } from "../../../models/Car";
// //(res, status, success, data, errors, message)

// interface IPoint { 
//   x:number 
//   y:number 
// } 

// const getCars = async (req: Request, res: Response, next: NextFunction) => {
//   let limit = 10;
//   try {
//     const filter = req.query;
//     if (Number(filter?.page) > 25) filter.page = "1";

//     //mongoose query
//     const listOfFound:Record<string, string | number |boolean> = await Car.find(filter);
//     sendResponse(
//       res,
//       200,
//       true,
//       {
//         cars: listOfFound.slice(0, limit),
//         page: Number(filter.page),
//         total: listOfFound.length,
//       },
//       null,
//       "Found list of cars success"
//     );
//     // res.status(200).send({data: listOfFound})
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = { getCars };
