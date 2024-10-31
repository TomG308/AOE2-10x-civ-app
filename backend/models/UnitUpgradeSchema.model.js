import mongoose from 'mongoose';

const UnitUpgradeSchema = new mongoose.Schema({
  cost: {
    food: { type: Number },
    wood: { type: Number },
    gold: { type: Number },
  },
  id: { type: Number, unique: true },
  researchTime: { type: Number },
  internal_name: { type: String },
});

// Export the model using ES module syntax
const UnitUpgrade = mongoose.model('UnitUpgrade', UnitUpgradeSchema);
export default UnitUpgrade;
