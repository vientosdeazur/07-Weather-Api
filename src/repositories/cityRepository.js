const config = require('../config');
const axios = require('axios');

class CityRepository {

    constructor() {
        this.limit = 10;
        this.language ='es';
        this.pathBase =config.mapbox.pathBase;
        this.apiKey = config.mapbox.apikey; 
        
    }

    async findCities(city) {
       const response = await 
       axios.get(`${this.pathBase}${city}.json?limit=${this.limit}&language=${this.language}&access_token=${this.apiKey}`);
       return response.data; 
    }

}

module.exports = CityRepository;