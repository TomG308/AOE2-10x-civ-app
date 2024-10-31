import express from 'express';
import { getAllAgeNames } from '../controllers/ageNamesController.js'; // Make sure to update this controller too if it uses CommonJS

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Age names route');
});

// Use default export for the router
export default router;
