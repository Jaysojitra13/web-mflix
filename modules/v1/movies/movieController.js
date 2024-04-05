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

module.exports = movieController;
