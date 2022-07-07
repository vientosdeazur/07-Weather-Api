const WeatherRepository = require ('../repositories/weatherRepository');
const repository = new WeatherRepository();
const logger = require ('../loaders/loggers/index');


const weatherByCoords = async(lon,lat) => {

    const weather = await repository.weatherByCoords(lon,lat);

    logger.silly(JSON.stringify(weather));

    const weatherAtributes = {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        maxtemp: weather.main.temp_max,
        mintemp: weather.main.temp_min,
    }
    
    return weatherAtributes;
}

module.exports = {
    weatherByCoords
}