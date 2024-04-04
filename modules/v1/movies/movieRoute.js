const express = require('express');
const movieController = require('./movieController');

const movieRouter = express.Router();

movieRouter.get('/test', movieController.test);

module.exports = movieRouter;
