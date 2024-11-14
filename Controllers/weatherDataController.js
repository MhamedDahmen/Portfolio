const TemperatureHumidity = require ("../Models/TemperatureHumidityModel");
const WindSpeed= require ('../Models/WindspeedModel')
const WindDirection = require('../Models/WindDirectionModel')
const WeatherData = require ('../Models/WeatherDataModel')

const RecieveWeatherData =async(req,res)=>{
  try {
    const { deviceId, temperatureHumidityData, windspeed, windData } = req.body;
    const tempHumidity = await new TemperatureHumidity(temperatureHumidityData).save()
    const windSpeed = await new WindSpeed(windspeed).save()
    const windDirectionCompass= await new WindDirection(windData).save()

    const Weather = new WeatherData ({
        deviceId,
        temperatureHumidityData: tempHumidity._id,
        windspeed: windSpeed._id,
        windData: windDirectionCompass._id,
    })
    await Weather.save();
    res.status(201).json({ message: 'Données enregistrées avec succès', data: Weather });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement des données' });
  }
}

const GetWeatherData = async (req,res)=>{

  try {
      
    const weatherDataList = await WeatherData.find()
      .populate('temperatureHumidityData')
      .populate('windspeed')
      .populate('windData');

    res.status(200).json({ data: weatherDataList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
}
module.exports ={
    RecieveWeatherData ,
    GetWeatherData
}