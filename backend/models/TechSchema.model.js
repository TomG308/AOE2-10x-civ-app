const TechSchema = new mongoose.Schema({
    cost: {
      gold: { type: Number },
      wood: { type: Number },
      food: { type: Number },
      stone: { type: Number },
    },
    id: { type: Number, unique: true },
    languageHelpId: { type: Number },
    languageNameId: { type: Number },
    repeatable: { type: Boolean },
    researchTime: { type: Number },
    internal_name: { type: String },
  });
  
  module.exports = mongoose.model('Tech', TechSchema);
  