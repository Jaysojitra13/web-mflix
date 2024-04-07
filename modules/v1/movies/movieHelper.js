const movieModel = require("../../../models/movie");

const movieHelper = {};

// To add a new movie
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

// To get a movie by id
movieHelper.getMovieById = async (id) => {
  try {
    const movie = await movieModel.findById(id);
    return movie;
  } catch (err) {
    throw err;
  }
};

// To delete a movie by id
movieHelper.deleteMovieById = async (id) => {
  try {
    const result = await movieModel.deleteOne({ _id: id });
    return result;
  } catch (err) {
    throw err;
  }
};

movieHelper.updateMovieById = async (id, updateObj) => {
  try {
    const result = await movieModel.findOneAndUpdate({ _id: id }, { $set: updateObj });
    return result;
  } catch (err) {
    throw err;
  }
};
module.exports = movieHelper;
