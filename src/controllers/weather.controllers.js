const express = require ('express');
const Success = require ('../helpers/successHelper');
const {findCities} = require ('../services/city.service');
const {weatherByCoords} = require ('../services/weather.service');


const weather = async (req, res) => {
    const {lon,lat} = req.query;
    const weather =  await weatherByCoords(lon,lat);
    const success = new Success(weather);
    res.json(success);
    
}

const cities = async (req, res) => {
    const cities =  await findCities(req.params.city);
    const success = new Success(cities);
    res.json(success);
    
}



module.exports = {
    cities,
    weather,
}