const express = require('express');
const router = express.Router();
const { getAllUnitUpgrades } = require('../controllers/unitUpgradesController');

router.get('/', getAllUnitUpgrades);

module.exports = router;
