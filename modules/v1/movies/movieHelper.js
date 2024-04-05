const movieModel = require("../../../models/movie");

const movieHelper = {};

movieHelper.newMovie = async (
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
) => {
  try {
    const movieObj = {
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
    };

    const objToSave = new movieModel(movieObj);
    const result = await objToSave.save();

    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = movieHelper;
