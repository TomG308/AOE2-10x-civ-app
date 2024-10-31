import express from 'express';
import { getAllBuildings } from '../controllers/buildingsController.js'; // Update to ES module if needed

const router = express.Router();

router.get('/', getAllBuildings);

// Use default export for the router
export default router;
