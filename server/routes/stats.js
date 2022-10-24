const express = require('express');
const router = express.Router();

// Controllers
const {getAllWeights, getAllUserCount} = require('../controllers/stats');

// Endpoints
router.get('/stats/weight', getAllWeights);
router.get('/stats/users', getAllUserCount);

module.exports = router;
