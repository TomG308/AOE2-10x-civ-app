import CivNames from '../models/CivNamesSchema.model.js';

// Get all Civ Names
export const getAllCivNames = async (req, res) => {
  try {
    const civNames = await CivNames.find();
    res.json(civNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
