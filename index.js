require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var database = require("./config/database");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    helpers: {
      showGenre: (genre) => {
        return genre.join(', ');
      },
      strong: (options) => {
        return `<strong> ${options.fn(this)} </strong>`;
      },
    },
  })
);
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(database.url);

app.use("/api/v1", require("./routes/v1"));

app.get("/", function (req, res) {
  res.render("form");
});

app.listen(port);
console.log("App listening on port : " + port);
