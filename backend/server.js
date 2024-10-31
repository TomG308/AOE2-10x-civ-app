import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ageNamesRoutes from './routes/ageNamesRoutes.js';
import civNamesRoutes from './routes/civNamesRoutes.js';
import buildingsRoutes from './routes/buildingsRoutes.js';
import techsRoutes from './routes/techsRoutes.js';
import unitUpgradesRoutes from './routes/unitUpgradesRoutes.js';
import unitsRoutes from './routes/unitRoutes.js';
import fs from 'fs';
import path from 'path';
import AgeNames from './models/AgeNamesSchema.model.js';
import CivNames from './models/CivSchema.model.js';
import Building from './models/BuildingSchema.model.js';
import Tech from './models/TechSchema.model.js';
import Civ from './models/CivSchema.model.js';
import Unit from './models/UnitSchema.model.js';
import UnitUpgrade from './models/UnitUpgradeSchema.model.js';


dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/age-names', ageNamesRoutes);
app.use('/api/civ-names', civNamesRoutes);
app.use('/api/buildings', buildingsRoutes);
app.use('/api/techs', techsRoutes);
app.use('/api/unit-upgrades', unitUpgradesRoutes);
app.use('/api/units', unitsRoutes);

// Read JSON File
const __dirname = path.resolve();
const dataPath = path.join(__dirname, 'data.json');
const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const seedData = async () => {
    try {
      // Connect to MongoDB
      await connectDB();

      // Clear existing data in collections
      await AgeNames.deleteMany({});
      console.log('Age Names collection cleared');
      
      await CivNames.deleteMany({});
      console.log('Civ Names collection cleared');
      
      await Building.deleteMany({});
      console.log('Buildings collection cleared');
      
      await Tech.deleteMany({});
      console.log('Techs collection cleared');

      await Civ.deleteMany({});
      console.log('Civ collection cleared');
      
      await Unit.deleteMany({});
      console.log('Units collection cleared');
      
      await UnitUpgrade.deleteMany({});
      console.log('Unit Upgrades collection cleared');

      // Insert age names
      const ageNamesData = Object.entries(jsonData.age_names).map(([name, code]) => ({ name, code }));
      await AgeNames.insertMany(ageNamesData);
      console.log('Age Names inserted');

      // Insert civilization names
      const civNamesData = Object.entries(jsonData.civ_names).map(([civilization, nameCode]) => ({ civilization, nameCode }));
      await CivNames.insertMany(civNamesData);
      console.log('Civ Names inserted');

// Insert buildings
const buildingsData = Object.values(jsonData.data.buildings).map((item) => ({
    accuracyPercent: item.AccuracyPercent,
    armours: item.Armours.map(armour => ({ amount: armour.Amount, class: armour.Class })),
    attack: item.Attack,
    attacks: item.Attacks.map(attack => ({ amount: attack.Amount, class: attack.Class })),
    cost: {
      wood: item.Cost?.Wood || 0,
      stone: item.Cost?.Stone || 0,
      gold: item.Cost?.Gold || 0,
      food: item.Cost?.Food || 0,
    },
    garrisonCapacity: item.GarrisonCapacity,
    hp: item.HP,
    id: item.id,
    languageHelpId: item.LanguageHelpId,
    languageNameId: item.LanguageNameId,
    lineOfSight: item.LineOfSight,
    meleeArmor: item.MeleeArmor,
    minRange: item.MinRange,
    pierceArmor: item.PierceArmor,
    range: item.Range,
    reloadTime: item.ReloadTime,
    trainTime: item.TrainTime,
    internal_name: item.internal_name
  }));
  
  await Building.insertMany(buildingsData);
  console.log('Buildings inserted');
  

      // Insert techs
      const techsData = Object.values(jsonData.data.techs);
      await Tech.insertMany(techsData);
      console.log('Techs inserted');

// Insert units
const unitsData = Object.values(jsonData.data.units).map((item) => ({
    accuracyPercent: item.AccuracyPercent,
    armours: item.Armours.map(armour => ({ amount: armour.Amount, class: armour.Class })),
    attack: item.Attack,
    attackDelaySeconds: item.AttackDelaySeconds,
    attacks: item.Attacks.map(attack => ({ amount: attack.Amount, class: attack.Class })),
    chargeEvent: item.ChargeEvent,
    chargeType: item.ChargeType,
    cost: item.Cost,
    frameDelay: item.FrameDelay,
    garrisonCapacity: item.GarrisonCapacity,
    hp: item.HP,
    id: item.id,
    languageHelpId: item.LanguageHelpId,
    languageNameId: item.LanguageNameId,
    lineOfSight: item.LineOfSight,
    maxCharge: item.MaxCharge,
    meleeArmor: item.MeleeArmor,
    minRange: item.MinRange,
    pierceArmor: item.PierceArmor,
    range: item.Range,
    rechargeRate: item.RechargeRate,
    reloadTime: item.ReloadTime,
    speed: item.Speed,
    trainTime: item.TrainTime,
    trait: item.Trait,
    traitPiece: item.TraitPiece,
    internal_name: item.internal_name,
  }));
  
  await Unit.insertMany(unitsData);
  console.log('Units inserted');
  

      // Insert unit upgrades
      const unitUpgradesData = Object.values(jsonData.data.unit_upgrades || []); // Ensure unit upgrades exist in JSON
      await UnitUpgrade.insertMany(unitUpgradesData);
      console.log('Unit Upgrades inserted');

      console.log('Data seeding complete');
      process.exit();
    } catch (error) {
      console.error('Error seeding data:', error);
      process.exit(1);
    }
};


  

// Start the server and run seed data
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    // Connect to DB
    await connectDB();

    // await seedData();


    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
});
