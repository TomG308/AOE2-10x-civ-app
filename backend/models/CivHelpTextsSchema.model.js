const CivHelpTextsSchema = new mongoose.Schema({
  civilization: { type: String, required: true },
  helpTextCode: { type: String, required: true },
});

module.exports = mongoose.model('CivHelpTexts', CivHelpTextsSchema);
