import mongoose from 'mongoose';

const CivHelpTextsSchema = new mongoose.Schema({
  civilization: { type: String, required: true },
  helpTextCode: { type: String, required: true },
});

// Export the model using ES module syntax
const CivHelpTexts = mongoose.model('CivHelpTexts', CivHelpTextsSchema);
export default CivHelpTexts;
