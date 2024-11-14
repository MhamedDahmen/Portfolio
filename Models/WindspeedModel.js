const mongoose = require('mongoose');

const windspeedSchema = new mongoose.Schema({
  sensorModel: { type: String, required: true },
  vitesseVentkmh: Number,
}, { timestamps: true });

module.exports = mongoose.model('Windspeed', windspeedSchema);
