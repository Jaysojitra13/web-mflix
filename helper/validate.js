const { validationResult } = require('express-validator');

const validationHandler = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({
      message: result.errors.length ? result.errors[0].msg : ""
    });
  }
  return next();
};

module.exports = {
  validationHandler,
};
