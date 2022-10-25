const express = require('express');
const {getInitialDetails, createCollectionJob, getAllGCJ} = require("../controllers/mj");
const router = express.Router();

// Controllers


// Endpoints
router.get('/mj/initial', getInitialDetails);
router.post('/mj/create', createCollectionJob);
router.get('/mj/all', getAllGCJ);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
