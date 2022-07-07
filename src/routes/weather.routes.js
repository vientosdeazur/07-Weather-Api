const {Router} = require('express');
const {cities,weather} = require('../controllers/weather.controllers');

const routes = Router();

routes.get('/cities/:city',cities);
routes.get('/',weather);

console.log(routes,typeof routes);
module.exports = {routes};


