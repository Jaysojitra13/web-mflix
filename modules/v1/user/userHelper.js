const bcrypt = require('bcrypt');
const userModel = require('../../../models/user');
const jwtHelper = require('../../../helper/jwtHelper');

const userHelper = {};

userHelper.signUp = async (name, email, password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        const userObj = {
            name,
            email,
            password: hash
        }

        const objToSave = new userModel(userObj);
        const result = await objToSave.save();

        const response = {
            _id: result.id,
            name,
            email,
            token: jwtHelper.getAuthToken({ _id: result.id })
        }

        return response;
    } catch (err) {
        throw err;
    }
};

userHelper.login = async (authUser, password) => {
    try {
        const passwordMatched = await bcrypt.compare(password, authUser.password);
        
        if(!passwordMatched) {
            throw new Error('Invalid password');
        }

        const response = {
            _id: authUser._id,
            email: authUser.email,
            token: jwtHelper.getAuthToken({ _id: authUser.id })
        }
        return response;
    } catch (err) {
        throw err;
    }
};

module.exports = userHelper;