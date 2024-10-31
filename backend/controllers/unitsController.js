import Unit from '../models/unitSchema.model.js';

// Get all Units
export const getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
