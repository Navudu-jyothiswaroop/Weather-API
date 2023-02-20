const { getCoordinateByCity } = require('../services/coordinateByCity');
const {getWeatherReport} = require("../services/weatherReport");
const logger = require('../logger');
const weatherController= async(req, res) =>{
    const city = req.query.city;
    let resp = await getCoordinateByCity(city);

    let resp1 = await getWeatherReport(resp);
    logger.info('get weather data by latitude and longitude');
    res.json(resp1.data);
};

module.exports = {weatherController};