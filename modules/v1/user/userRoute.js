const express = require('express');
const userController = require('./userController');
const userMiddelware = require('./userMiddleware');
const { validationHandler } = require('../../../helper/validate');

const userRouter = express.Router();

userRouter.get('/test', userController.test);

userRouter.post('/sign-up', userMiddelware.signUpMiddleware(), validationHandler, userMiddelware.checkUniqueEmail, userController.signUp);

module.exports = userRouter;
