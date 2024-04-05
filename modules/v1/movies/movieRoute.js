const express = require("express");
const movieController = require("./movieController");
const movieMiddleware = require("./movieMiddleware");
const { validationHandler } = require('../../../helper/validate');

const movieRouter = express.Router();

movieRouter.get("/test", movieController.test);

//To add a new movie
movieRouter.post("/Movies", movieMiddleware.addNewMovie(), validationHandler, movieController.newMovie);

// To get a movie by id
movieRouter.get("/Movies/:id", movieController.getMovieById);

// To delete a movie by id
movieRouter.delete("/Movies/:id", movieController.deleteMovieById);

module.exports = movieRouter;
