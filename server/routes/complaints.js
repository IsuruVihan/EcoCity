const express = require('express');
const router = express.Router();

// Controllers
const { submitComplaint, getComplaintsByUserId } = require('../controllers/complaints');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
router.post('/complaints', validateToken, submitComplaint);
router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
