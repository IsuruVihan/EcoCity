const express = require('express');
const router = express.Router();

// Controllers
const {openLid, dumpGarbage, getAllHubs, updateHub, removeHub, getHub} = require('../controllers/hub');
const {getBin} = require("../controllers/bin");

// Endpoints
router.get('/bin/get', getBin);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
