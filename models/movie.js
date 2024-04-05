var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const imdbSchema = new Schema({
  rating: Number,
  votes: Number,
  id: Number,
});

const awardSchema = new Schema({
  wins: Number,
  nominations: Number,
  text: String,
});

const viewerSchema = new Schema({
  rating: Number,
  numReviews: Number,
  meter: Number,
});

const criticSchema = new Schema({
  rating: Number,
  numReviews: Number,
  meter: Number,
});

const tomatoesSchema = new Schema({
  viewer: viewerSchema,
  fresh: Number,
  critic: criticSchema,
  rotten: Number,
  lastUpdated: Date,
  production: String,
  dvd: Date,
});

const MovieSchema = new Schema({
  plot: String,
  genres: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return Object.keys(value).length > 0; // Ensure there's at least one genre
      },
      message: "At least one genre is required",
    },
  },
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return Object.keys(value).length > 0; // Ensure there's at least one language
      },
      message: "At least one language is required",
    },
  },
  released: {
    type: Date,
  },
  directors: [String],
  writers: [String],
  rated: String,
  awards: awardSchema,
  lastupdated: String,
  year: Number,
  imdb: imdbSchema,
  countries: [String],
  type: String,
  tomatoes: tomatoesSchema,
  poster: String,
});

module.exports = mongoose.model("movies", MovieSchema);
