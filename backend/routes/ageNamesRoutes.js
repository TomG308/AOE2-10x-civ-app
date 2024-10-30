const express = require('express');
const router = express.Router();
const { getAllAgeNames } = require('../controllers/ageNamesController');

router.get('/', getAllAgeNames);

module.exports = router;
