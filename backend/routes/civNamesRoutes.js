const express = require('express');
const router = express.Router();
const { getAllCivNames } = require('../controllers/civNamesController');

router.get('/', getAllCivNames);

module.exports = router;
