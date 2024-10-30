const Tech = require('../models/Tech');

// Get all Techs
exports.getAllTechs = async (req, res) => {
  try {
    const techs = await Tech.find();
    res.json(techs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

