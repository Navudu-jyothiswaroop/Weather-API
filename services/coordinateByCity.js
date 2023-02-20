const { default: axios } = require('axios');

async function getCoordinateByCity(city) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25eedde61a0e0e2c48d7cbd7bcb11193`);
}
module.exports = {getCoordinateByCity};