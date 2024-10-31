import UnitUpgrade from '../models/UnitUpgradeSchema.model.js';

// Get all Unit Upgrades
export const getAllUnitUpgrades = async (req, res) => {
  try {
    const unitUpgrades = await UnitUpgrade.find();
    res.json(unitUpgrades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
