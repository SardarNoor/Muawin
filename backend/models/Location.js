const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location; 