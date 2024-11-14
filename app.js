// app.js
const express = require('express');
const cors = require ('cors')
const bodyParser = require ('body-parser');
const WeatherDataRoutes = require('./Routes/WeatherDataRoutes')
const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT;


require("./Loaders/dbConnection");
app.use(cors({
    origin : "http://localhost:3000",
}))


app.use('/WeatherApi' , WeatherDataRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});