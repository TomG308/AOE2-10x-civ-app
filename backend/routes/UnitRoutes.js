const express = require('express');
const router = express.Router();
const { getAllUnits } = require('../controllers/unitsController');

router.get('/', getAllUnits);

module.exports = router;
