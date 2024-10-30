const BuildingSchema = new mongoose.Schema({
    accuracyPercent: { type: Number },
    armours: [
      {
        amount: { type: Number },
        class: { type: Number },
      },
    ],
    attack: { type: Number },
    attacks: [
      {
        amount: { type: Number },
        class: { type: Number },
      },
    ],
    cost: {
      wood: { type: Number },
      stone: { type: Number },
      gold: { type: Number },
      food: { type: Number },
    },
    garrisonCapacity: { type: Number },
    hp: { type: Number },
    id: { type: Number, unique: true },
    languageHelpId: { type: Number },
    languageNameId: { type: Number },
    lineOfSight: { type: Number },
    meleeArmor: { type: Number },
    minRange: { type: Number },
    pierceArmor: { type: Number },
    range: { type: Number },
    reloadTime: { type: Number },
    trainTime: { type: Number },
    internal_name: { type: String },
  });
  
  module.exports = mongoose.model('Building', BuildingSchema);