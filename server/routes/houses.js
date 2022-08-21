const express = require('express');
const router = express.Router();

// Controllers
const { getHouseByEmail } = require('../controllers/houses');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
router.get('/houses/:email', validateToken, getHouseByEmail);

module.exports = router;
