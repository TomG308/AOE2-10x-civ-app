import AgeNames from '../models/AgeNamesSchema.model.js';

// Get all Age Names
export const getAllAgeNames = async (req, res) => {
  try {
    const ageNames = await AgeNames.find();
    res.json(ageNames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
