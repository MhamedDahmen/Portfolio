const express = require ('express')
const router = express.Router();
const WeatherController = require('../Controllers/weatherDataController');


router.post('/recieveData', WeatherController.RecieveWeatherData)
router.get('/GetWeatherData', WeatherController.GetWeatherData)


module.exports = router;