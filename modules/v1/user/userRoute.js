const express = require('express');
const userController = require('./userController');

const userRouter = express.Router();

userRouter.get('/test', userController.test);

module.exports = userRouter;
