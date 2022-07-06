const dotenv = require('dotenv');
const envFound = dotenv.config();

if(!envFound){
    throw new Error(".env file not found");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';   

module.exports = {
    port: process.env.PORT,
    api:{
       prefix: ''        
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/api-docs'
    },
    mapbox:{
        apikey: process.env.MAPBOX_API_KEY,
        pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    }
}