import CivHelpTexts from '../models/CivHelpTextsSchema.model.js';

// Get all Civ Help Texts
export const getAllCivHelpTexts = async (req, res) => {
  try {
    const civHelpTexts = await CivHelpTexts.find();
    res.json(civHelpTexts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
