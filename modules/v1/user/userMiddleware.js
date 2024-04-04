const { check } = require('express-validator');
const userModel = require('../../../models/user');

const userMiddelware = {};

userMiddelware.signUpMiddleware = () => {
  return [
    check('email', 'email is required Field').trim().not().isEmpty(),
    check('name', 'name is required Field').trim().not().isEmpty(),
    check('password', 'password is required field').trim().not().isEmpty()
  ];
};

userMiddelware.checkUniqueEmail = async (req, res, next) => {
    try {
      const { email } = req.body;
  
      const userData = await userModel.findOne({ email });
  
      if (userData) {
        throw new Error("User already exist");
      } else {
        next();
      }
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };

module.exports = userMiddelware;