const express = require('express');
const router = express.Router();

// Controllers
const {getAllDrivers} = require('../controllers/driver');

// Endpoints
router.get('/driver/all', getAllDrivers);
// router.post('/driver/update', updateHub);
// router.post('/driver/remove', removeHub);
// router.get('/driver/get', getHub);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
