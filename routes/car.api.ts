import express from "express";
const router = express.Router();
import { createCar } from "../api/controllers/car/createCar";
import { deleteCar } from "../api/controllers/car/deleteCar";
import { editCar } from "../api/controllers/car/editCar";
const { getCars } = require("../api/controllers/car/getCars");

// CREATE
router.post("/", createCar);

// READ
router.get("/", getCars);

// UPDATE
router.put("/:id", editCar);

// // DELETE
router.delete("/:id", deleteCar);

export default  router;
