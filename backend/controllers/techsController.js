import Tech from '../models/TechSchema.model.js';

// Get all Techs
export const getAllTechs = async (req, res) => {
  try {
    const techs = await Tech.find();
    res.json(techs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
