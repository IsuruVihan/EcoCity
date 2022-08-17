const express = require('express');
const router = express.Router();

// Controllers
const { submitComplaint } = require('../controllers/complaints');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
router.post('/complaints', validateToken, submitComplaint);

module.exports = router;
