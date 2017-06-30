const apiRoutes = require('express').Router();
const collectionValidation = require('./Collection/validation.js');

apiRoutes.use('/collection', collectionValidation);

module.exports = apiRoutes;