const express = require('express');
const router = express.Router();

// Controllers
const {
    submitComplaint,
    removeComplaint,
    getComplaintsByUserId,
    getAllComplaints,
    testing, resolveReject
} = require('../controllers/complaints');

// Middleware
const { validateToken } = require('../middleware/auth');

// Endpoints
router.post('/complaints', validateToken, submitComplaint);
router.put('/complaints', validateToken, removeComplaint);
router.get('/complaints/all', getAllComplaints);
router.post('/complaints/update', resolveReject);
router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
