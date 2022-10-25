const express = require('express');
const router = express.Router();

// Controllers
const { getGarbageHubDetails } = require('../controllers/areaMap');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
router.get('/areaMap', validateToken, getGarbageHubDetails);

module.exports = router;
