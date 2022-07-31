const express = require('express');
const router = express.Router();

// Controllers
const { logUser, currentLoggedInUser } = require('../controllers/login');

// Endpoints
router.post('/login', logUser);
router.post('/login/current', currentLoggedInUser);

module.exports = router;
