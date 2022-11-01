const mongoose = require("mongoose");
const Car = require("../../../models/Car");
var createError = require("http-errors");
const { sendResponse } = require("../../../helpers/utils");
//(res, status, success, data, errors, message)

const getCars = async (req, res, next) => {
  let limit = 10;
  try {
    const filter = req.query;

    //mongoose query
    const listOfFound = await Car.find(filter);
    sendResponse(
      res,
      200,
      true,
      {
        data: listOfFound.slice(0, limit),
        page: limit/10,
        total: listOfFound.length,
      },
      null,
      "Found list of cars success"
    );
    // res.status(200).send({data: listOfFound})
  } catch (error) {
    next(createError(404, error));
  }
};

module.exports = { getCars };
