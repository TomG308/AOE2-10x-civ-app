import express from 'express';
import { getAllTechs } from '../controllers/techsController.js'; // Note the .js extension

const router = express.Router();

// Define the route to get all techs
router.get('/', getAllTechs);

// Export the router using ES module syntax
export default router;
