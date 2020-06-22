const axios = require('axios');

const getLugar = async(dir) => {

    const encodeURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURL}`,
        headers: { 'x-rapidapi-key': '37063ecad2mshdea215e8481da77p135e38jsnca0dc7ca5857' }
    });
    const resp = await instance.get();

    if (resp.data.message === 'city not found') {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const Ciudad = resp.data.name;
    const Latitud = resp.data.coord.lat;
    const Longitud = resp.data.coord.lon;

    return {

        Ciudad,
        Latitud,
        Longitud
    }
}
module.exports = {

    getLugar

}