const CivHelpTexts = require('../models/CivHelpTexts');

// Get all Civ Help Texts
exports.getAllCivHelpTexts = async (req, res) => {
  try {
    const civHelpTexts = await CivHelpTexts.find();
    res.json(civHelpTexts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


