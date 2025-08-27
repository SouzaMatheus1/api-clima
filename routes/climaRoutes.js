const express = require('express');
const router = express.Router();
const climaController = require('../controllers/climaController');

router.get('/', climaController.getClima);

module.exports = router;