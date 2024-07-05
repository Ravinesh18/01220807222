const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController.js');

router.get('/:numberid', numbersController.getNumbers);

module.exports = router;
