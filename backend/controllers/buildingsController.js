const Building = require('../models/Building');

// Get all Buildings
exports.getAllBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

