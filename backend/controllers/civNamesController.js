const CivNames = require('../models/CivNames');

// Get all Civ Names
exports.getAllCivNames = async (req, res) => {
  try {
    const civNames = await CivNames.find();
    res.json(civNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

