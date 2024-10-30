import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

dotenv.config()

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready")
})

// Routes
app.use('/api/age-names', require('./routes/ageNamesRoutes'));
app.use('/api/civ-helptexts', require('./routes/civHelpTextsRoutes'));
app.use('/api/civ-names', require('./routes/civNamesRoutes'));
app.use('/api/buildings', require('./routes/buildingsRoutes'));
app.use('/api/techs', require('./routes/techsRoutes'));
app.use('/api/unit-upgrades', require('./routes/unitUpgradesRoutes'));
app.use('/api/units', require('./routes/unitsRoutes'));

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
})
     
console.log('TC was here')