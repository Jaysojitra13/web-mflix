const express = require("express");
const movieController = require("./movieController");
const movieMiddleware = require("./movieMiddleware");
const { validationHandler } = require("../../../helper/validate");

const movieRouter = express.Router();

movieRouter.get(
  "/",
  movieMiddleware.checkPagination(),
  validationHandler,
  movieController.getAllMovies
);

//To add a new movie
movieRouter.post(
  "/",
  movieMiddleware.addNewMovie(),
  validationHandler,
  movieMiddleware.checkToken,
  movieController.newMovie
);

// To get a movie by id
movieRouter.get(
  "/:id",
  movieMiddleware.checkToken,
  movieMiddleware.checkMovieExists,
  movieController.getMovieById
);

// To delete a movie by id
movieRouter.delete(
  "/:id",
  movieMiddleware.checkToken,
  movieMiddleware.checkMovieExists,
  movieController.deleteMovieById
);

// To update a movie by id
movieRouter.put(
  "/:id",
  movieMiddleware.checkToken,
  movieMiddleware.checkMovieExists,
  movieController.updateMovieById
);

module.exports = movieRouter;
