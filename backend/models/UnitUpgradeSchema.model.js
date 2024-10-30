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
  
  module.exports = mongoose.model('UnitUpgrade', UnitUpgradeSchema);
  
