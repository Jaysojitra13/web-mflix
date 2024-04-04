const jwt = require('jsonwebtoken');

const jwtHelper = {};

jwtHelper.getAuthToken = (data) => { return jwt.sign(data, process.env.SECRET_KEY, { algorithm: 'HS512'}); };

jwtHelper.decodeAuthToken = (token) => {
  if (token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY, { algorithms: 'HS512'});
    } catch (error) {
      return false;
    }
  }
  return false;
};

module.exports = jwtHelper;
