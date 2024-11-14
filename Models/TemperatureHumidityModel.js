const mongoose = require ("mongoose");
const temperatureHumiditySchema = new mongoose.Schema({
    sensorModel: { type: String, required: true },
    temperatureCelsius: Number,
    humidityPercentage: Number,
  }, { timestamps: true });
  
  module.exports = mongoose.model('TemperatureHumidity', temperatureHumiditySchema);