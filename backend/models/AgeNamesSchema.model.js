const mongoose = require('mongoose');

const AgeNamesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

module.exports = mongoose.model('AgeNames', AgeNamesSchema);
