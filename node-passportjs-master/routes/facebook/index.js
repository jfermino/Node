const express = require('express')
const router = express.Router();
const faceRouter = require('./facebook')

router.use('/facebook',faceRouter);

module.exports = router;