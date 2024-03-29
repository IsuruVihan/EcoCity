const express = require('express');
const router = express.Router();

// Controllers
const {openLid, dumpGarbage, getAllHubs, updateHub, removeHub, getHub} = require('../controllers/hub');

// Endpoints
router.post('/hub/open', openLid);
router.post('/hub/dump', dumpGarbage);
router.get('/hub/all', getAllHubs);
router.post('/hub/update', updateHub);
router.post('/hub/remove', removeHub);
router.get('/hub/get', getHub);
// router.put('/complaints', validateToken, removeComplaint);
// router.get('/complaints/all', validateToken, getAllComplaints);
// router.post('/complaints/update', validateToken, resolveReject);
// router.get('/complaints/:id', validateToken, getComplaintsByUserId);

module.exports = router;
