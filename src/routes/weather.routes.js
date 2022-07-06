const {Router} = require('express');
const {cities} = require('../controllers/weather.controllers');

const routes = Router();

routes.get('/cities/:city',cities);

console.log(routes,typeof routes);
module.exports = {routes};


