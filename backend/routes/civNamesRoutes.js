import express from 'express';
import { getAllCivNames } from '../controllers/civNamesController.js'; // Note the .js extension

const router = express.Router();

// Define the route to get all civilization names
router.get('/', getAllCivNames);

// Export the router as default for ES module compatibility
export default router;
