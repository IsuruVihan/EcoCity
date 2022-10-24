const express = require('express');
const router = express.Router();

// Controllers
const {getAllWeights} = require('../controllers/stats');

// Endpoints
router.get('/stats/weight', getAllWeights);

module.exports = router;
