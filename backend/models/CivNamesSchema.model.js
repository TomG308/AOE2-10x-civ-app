import mongoose from 'mongoose';

const CivNamesSchema = new mongoose.Schema({
  civilization: { type: String, required: true },
  nameCode: { type: String, required: true },
});

// Export the model using ES module syntax
const CivNames = mongoose.model('CivNames', CivNamesSchema);
export default CivNames;
