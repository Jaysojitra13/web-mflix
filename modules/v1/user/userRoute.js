const express = require('express');
const userController = require('./userController');
const userMiddelware = require('./userMiddleware');
const { validationHandler } = require('../../../helper/validate');
const movieMiddleware = require('../movies/movieMiddleware');

const userRouter = express.Router();

userRouter.get('/test', userController.test);

userRouter.post('/sign-up', userMiddelware.signUpMiddleware(), validationHandler, userMiddelware.checkUniqueEmail, userController.signUp);

userRouter.post('/login', userMiddelware.loginMiddleware(), validationHandler, userMiddelware.checkEmailExist, userController.login);

userRouter.post('/logout', movieMiddleware.checkToken, userController.logout);
module.exports = userRouter;
