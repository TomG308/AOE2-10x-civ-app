import Building from '../models/BuildingSchema.model.js';

// Get all Buildings
export const getAllBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
