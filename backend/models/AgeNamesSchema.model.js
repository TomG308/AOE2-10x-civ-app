import mongoose from 'mongoose';

const AgeNamesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

// Export the model using ES module syntax
const AgeNames = mongoose.model('AgeNames', AgeNamesSchema);
export default AgeNames;
