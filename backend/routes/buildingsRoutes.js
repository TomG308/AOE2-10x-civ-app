const express = require('express');
const router = express.Router();
const { getAllBuildings } = require('../controllers/buildingsController');

router.get('/', getAllBuildings);

module.exports = router;
