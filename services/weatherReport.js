const { default: axios } = require('axios');

async function getWeatherReport(resp) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${resp.data.coord.lat}&lon=${resp.data.coord.lon}&appid=25eedde61a0e0e2c48d7cbd7bcb11193`);
}

module.exports = {getWeatherReport};