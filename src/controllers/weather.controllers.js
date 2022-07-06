const express = require ('express');
const CityRepository = require ('../repositories/cityRepository');

const repository = new CityRepository();

const cities = async (req, res) => {
    res.json(await repository.findCities(req.params.city));
    
}




module.exports = {
    cities
}