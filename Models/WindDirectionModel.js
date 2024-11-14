const mongoose = require('mongoose');

const windDataSchema = new mongoose.Schema({
  sensorModel: { type: String, required: true },
  windDirectionCompass: String,
}, { timestamps: true });

module.exports = mongoose.model('WindData', windDataSchema);
