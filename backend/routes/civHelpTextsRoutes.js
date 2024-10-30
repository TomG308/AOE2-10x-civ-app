const express = require('express');
const router = express.Router();
const { getAllCivHelpTexts } = require('../controllers/civHelpTextsController');

router.get('/', getAllCivHelpTexts);

module.exports = router;
