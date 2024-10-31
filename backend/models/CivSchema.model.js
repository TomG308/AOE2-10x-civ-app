import mongoose from 'mongoose';

const CivSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  }
});

// Export the model using ES module syntax
const Civ = mongoose.model('Civ', CivSchema);
export default Civ;
