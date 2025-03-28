const express = require('express');
const router = express.Router();
const { log, imageUpload, videoUpload, imageReducerUpload, localFileUpload, give } = require('../controllers/file_upload');

router.post('/imageUpload', imageUpload);
router.post('/videoUpload', videoUpload);
router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);
router.post('/log', log);
router.post('/give', give);

module.exports = router;
