const UnitUpgrade = require('../models/UnitUpgrade');

// Get all Unit Upgrades
exports.getAllUnitUpgrades = async (req, res) => {
  try {
    const unitUpgrades = await UnitUpgrade.find();
    res.json(unitUpgrades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
