import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// Import routes
import ageNamesRoutes from './routes/ageNamesRoutes.js';
import civHelpTextsRoutes from './routes/civHelpTextsRoutes.js';
import civNamesRoutes from './routes/civNamesRoutes.js';
import buildingsRoutes from './routes/buildingsRoutes.js';
import techsRoutes from './routes/techsRoutes.js';
import unitUpgradesRoutes from './routes/unitUpgradesRoutes.js';
import unitsRoutes from './routes/unitRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Base route
app.get("/", (req, res) => {
    res.send("Server is ready");
});

// Routes
app.use('/api/age-names', ageNamesRoutes);
app.use('/api/civ-helptexts', civHelpTextsRoutes);
app.use('/api/civ-names', civNamesRoutes);
app.use('/api/buildings', buildingsRoutes);
app.use('/api/techs', techsRoutes);
app.use('/api/unit-upgrades', unitUpgradesRoutes);
app.use('/api/units', unitsRoutes);

// Start server and connect to database
app.listen(5000, async () => {
    await connectDB();
    console.log("Server started at http://localhost:5000");
});
