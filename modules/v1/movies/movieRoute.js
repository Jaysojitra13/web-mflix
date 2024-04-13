const express = require("express");
const movieController = require("./movieController");
const movieMiddleware = require("./movieMiddleware");
const { validationHandler } = require("../../../helper/validate");
const rateLimit = require('express-rate-limit');

const movieRouter = express.Router();

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	limit: 2
})

movieRouter.get(
  "/",
  limiter,
  movieMiddleware.checkPagination(),
  validationHandler,
  movieController.getAllMovies
);

movieRouter.post(
  "/web",
  movieController.getAllMoviesForWeb
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
