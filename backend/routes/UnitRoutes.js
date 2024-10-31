import express from 'express';
import { getAllUnits } from '../controllers/unitsController.js'; // Note the .js extension

const router = express.Router();

// Define the route to get all units
router.get('/', getAllUnits);

// Export the router using ES module syntax
export default router;
