const AgeNames = require('../models/AgeNames');

// Get all Age Names
exports.getAllAgeNames = async (req, res) => {
  try {
    const ageNames = await AgeNames.find();
    res.json(ageNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
