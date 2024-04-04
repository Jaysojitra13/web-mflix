const movieController = {};

movieController.test = async (req, res) => {
    try {
        return res.status(200).json({
            message: "success",
          });
    } catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
}

module.exports = movieController;