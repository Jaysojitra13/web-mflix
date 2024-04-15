const { check, query } = require("express-validator");
const jwt = require('../../../helper/jwtHelper');
const userModel = require('../../../models/user');
const movieModel = require('../../../models/movie');
const movieMiddleware = {};

movieMiddleware.addNewMovie = () => {
  return [
    check("title", "Title is required field").trim().not().isEmpty(),
    check("genres", "Genre is required field").isArray().notEmpty(),
    check("languages", "languages is required field").isArray().notEmpty(),
  ];
};



movieMiddleware.checkToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization && !blackList.has(authorization)) {
      const decode = jwt.decodeAuthToken(authorization);

      if (decode) {
        const userData = await userModel.findById(decode._id);

        if (userData) {
          req.authUser = userData;
          next();
        } else {
          throw new Error("UNAUTHORIZED");
        }
      } else {
        throw new Error("UNAUTHORIZED");
      }
    } else {
      throw new Error("UNAUTHORIZED");
    }
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
}

movieMiddleware.checkMovieExists = async (req, res, next) => {
  try {
    const movieId = req.params.id;

    const movieData = await movieModel.findById(movieId);

    if (!movieData) {
      throw new Error('Movie Not Found');
    }

    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};


movieMiddleware.checkPagination = () => {
  return [
    query("page", "Page should be number").isNumeric(),
    query("perPage", "perPage should be number").isNumeric()
  ];
};

module.exports = movieMiddleware;