const routes = require('express').Router();
const apiValidation = require('../api/validation.js');

routes.use('/api',apiValidation);

module.exports = routes;