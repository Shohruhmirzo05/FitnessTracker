const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

// Home page route
router.get('/', indexController.getHome);

module.exports = router; 