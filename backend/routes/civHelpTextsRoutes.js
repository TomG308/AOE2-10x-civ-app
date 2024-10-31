import express from 'express';
import { getAllCivHelpTexts } from '../controllers/civHelpTextsController.js';

const router = express.Router();

router.get('/', getAllCivHelpTexts);

export default router;
