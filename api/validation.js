const apiValidations = require('express').Router();
const collectionValidation = require('./Collection/validation.js');

apiValidations.use('/collection', collectionValidation);

module.exports = apiValidations;