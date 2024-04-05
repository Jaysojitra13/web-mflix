const { check } = require("express-validator");

const movieMiddleware = {};

movieMiddleware.addNewMovie = () => {
  return [
    check("title", "Title is required field").trim().not().isEmpty(),
    check("genres", "Genre is required field").trim().not().isEmpty(),
  ];
};


module.exports = movieMiddleware;