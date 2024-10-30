const express = require('express');
const router = express.Router();
const { getAllTechs } = require('../controllers/techsController');

router.get('/', getAllTechs);

module.exports = router;
