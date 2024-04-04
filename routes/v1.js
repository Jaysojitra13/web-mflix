const express = require('express');
const path = require('path');

const router = express.Router();

const v = `../modules/${path.basename(__filename, '.js')}`;

router.use('/movie', require(`${v}/movies/movieRoute`));
router.use('/user', require(`${v}/user/userRoute`));

router.all('/*', (req, res) =>
  res.status(404).json({
    error: 'URL NOT FOUND',
  })
);

module.exports = router;
