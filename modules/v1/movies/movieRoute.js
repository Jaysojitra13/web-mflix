const express = require("express");
const movieController = require("./movieController");

const movieRouter = express.Router();

movieRouter.get("/test", movieController.test);

movieRouter.post("/Movies", movieController.newMovie);

module.exports = movieRouter;
