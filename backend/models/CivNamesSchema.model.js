const CivNamesSchema = new mongoose.Schema({
    civilization: { type: String, required: true },
    nameCode: { type: String, required: true },
  });
  
  module.exports = mongoose.model('CivNames', CivNamesSchema);
  