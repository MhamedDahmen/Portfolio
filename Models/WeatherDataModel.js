const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  temperatureHumidityData: { type: mongoose.Schema.Types.ObjectId, ref: 'TemperatureHumidity' },
  windspeed: { type: mongoose.Schema.Types.ObjectId, ref: 'Windspeed' },
  windData: { type: mongoose.Schema.Types.ObjectId, ref: 'WindData' },
});

module.exports = mongoose.model('WeatherData', weatherDataSchema);
