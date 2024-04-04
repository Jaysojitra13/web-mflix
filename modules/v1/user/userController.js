const userHelper = require("./userHelper");

const userController = {};

userController.test = async (req, res) => {
    try {
        return res.status(200).json({
            message: "User success",
          });
    } catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
}

userController.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const result = await userHelper.signUp(name, email, password);
        return res.status(200).json({
            message: "Registered successfully",
            data: result
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = userController;