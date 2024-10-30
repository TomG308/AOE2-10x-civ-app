const Unit = require('../models/Unit');

// Get all Units
exports.getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

