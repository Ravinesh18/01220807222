const numberService = require('../services/numberSevice.js');

const getNumbers = async (req, res) => {
    const { numberid } = req.params;
    try {
        const response = await numberService.handleNumberRequest(numberid);
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getNumbers };
