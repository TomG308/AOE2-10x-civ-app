import express from 'express';
import { getAllUnitUpgrades } from '../controllers/unitUpgradesController.js'; // Note the .js extension

const router = express.Router();

// Define the route to get all unit upgrades
router.get('/', getAllUnitUpgrades);

// Export the router using ES module syntax
export default router;
