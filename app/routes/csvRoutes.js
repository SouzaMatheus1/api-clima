const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

router.get('/', csvController.lerCsv)

module.exports = router;