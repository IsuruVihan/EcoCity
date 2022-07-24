const express = require('express');
const router = express.Router();

// Controllers
const { logUser } = require('../controllers/login');

// Endpoints
router.post('/login', logUser);

module.exports = router;
