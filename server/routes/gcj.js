const express = require('express');
const {getInitialDetails} = require("../controllers/gcj");
const router = express.Router();

// Controllers


// Endpoints
router.get('/gcj/initial', getInitialDetails);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
