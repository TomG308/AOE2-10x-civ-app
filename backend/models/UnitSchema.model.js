const UnitSchema = new mongoose.Schema({
    accuracyPercent: { type: Number },
    armours: [
      {
        amount: { type: Number },
        class: { type: Number },
      },
    ],
    attack: { type: Number },
    attackDelaySeconds: { type: Number },
    attacks: [
      {
        amount: { type: Number },
        class: { type: Number },
      },
    ],
    cost: {
      food: { type: Number },
      wood: { type: Number },
      gold: { type: Number },
      stone: { type: Number },
    },
    frameDelay: { type: Number },
    garrisonCapacity: { type: Number },
    hp: { type: Number },
    id: { type: Number, unique: true },
    languageHelpId: { type: Number },
    languageNameId: { type: Number },
    lineOfSight: { type: Number },
    meleeArmor: { type: Number },
    pierceArmor: { type: Number },
    range: { type: Number },
    reloadTime: { type: Number },
    speed: { type: Number },
    trainTime: { type: Number },
    internal_name: { type: String },
  });
  
  module.exports = mongoose.model('Unit', UnitSchema);
  