const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=40f0eb50d9a4c3df733b5c763a92a47d&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}