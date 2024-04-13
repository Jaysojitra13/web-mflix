const movieHelper = require("./movieHelper");

const movieController = {};

movieController.test = async (req, res) => {
  try {
    return res.status(200).json({
      message: "success",
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

movieController.getAllMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    const movies = await movieHelper.getAllMovies(page, perPage);

    return res.status(200).json(movies);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

movieController.getAllMoviesForWeb = async (req, res) => {
  try {
    const page = parseInt(req.body.page) || 1;
    const perPage = parseInt(req.body.perPage) || 10;
    const search = req.body.search || '';

    let movies = await movieHelper.getAllMovies(page, perPage, search);
    movies = JSON.parse(JSON.stringify(movies));
    return res.render("movies", { data: movies, layout: false });
    
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
//To add a new movie
movieController.newMovie = async (req, res) => {
  try {
    const {
      plot,
      genres,
      runtime,
      cast,
      num_mflix_comments,
      title,
      fullplot,
      languages,
      released,
      directors,
      rated,
      awards,
      lastupdated,
      year,
      imdb,
      countries,
      type,
      tomatoes,
    } = req.body;

    const result = await movieHelper.newMovie(
      plot,
      genres,
      runtime,
      cast,
      num_mflix_comments,
      title,
      fullplot,
      languages,
      released,
      directors,
      rated,
      awards,
      lastupdated,
      year,
      imdb,
      countries,
      type,
      tomatoes
    );

    return res.status(200).json({
      message: "Movie added successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

// To get a movie by id
movieController.getMovieById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await movieHelper.getMovieById(id);

    if (result) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

//To delete a movie by id
movieController.deleteMovieById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await movieHelper.deleteMovieById(id);
    if (result.deletedCount === 1) {
      return res.status(200).json({
        message: "Movie deleted successfully.",
      });
    } else {
      return res.status(404).json({
        message: "Movie not found",
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

//To update a movie by id
movieController.updateMovieById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await movieHelper.updateMovieById(id, req.body);
    return res.status(200).json({
      message: "Movie updated successfully.",
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = movieController;
