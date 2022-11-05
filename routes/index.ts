import express from'express';
const router = express.Router();

// CAR
import * as carAPI from './car.api';
router.use('/car', carAPI);

export default router;
