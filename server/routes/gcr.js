const express = require('express');
const router = express.Router();

// Controllers
const {getGCRJobDetails} = require('../controllers/gcr');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
// router.post('/complaints', validateToken, submitComplaint);
// router.put('/complaints', validateToken, removeComplaint);
router.get('/gcr', validateToken, getGCRJobDetails);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
