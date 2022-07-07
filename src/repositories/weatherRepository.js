const config = require('../config');
const axios = require('axios');

class WeatherRepository {

    constructor (){
        this.appid = config.openweather.apikey;
        this.pathBase = config.openweather.pathBase;
        this.lang = 'es';
        this.units = 'metric';
    }
 
    async weatherByCoords (lon,lat) {
       
        try{
         const instance = axios.create({
             baseURL: `${this.pathBase}`,
             params: {
                 lang:this.lang,
                 appid:this.appid,
                 units: this.units,
                 lon,
                 lat
             } ,
             });
             const response = await instance.get();
            return response.data;
        }catch (err){
            throw err;
        }
         
     }
}   

module.exports = WeatherRepository;