const express = require('express');
const {getInitialDetails, createMaintenanceJob, getAllMJ} = require("../controllers/mj");
const router = express.Router();

// Controllers


// Endpoints
router.get('/mj/initial', getInitialDetails);
router.post('/mj/create', createMaintenanceJob);
router.get('/mj/all', getAllMJ);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
