const express = require('express');
const router = express.Router();

// Controllers
const { testController } = require('../controllers/test');

// Middleware
const { testMiddleware } = require("../middleware/test");

// Endpoints
router.get('/test/hello', testMiddleware, testController);
// router.post('/admin/create', validateToken, createAdmin);
// router.put('/admin/password', validateToken, changePassword);

module.exports = router;
