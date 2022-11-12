const express = require('express');
const { readEvents, readExamResults, getUserInfo, readAttendance } = require('../controllers/student_controller');
const router = express.Router();

router.get('/events', readEvents);
router.get('/results/:id', readExamResults);
router.get('/:id', getUserInfo);
router.get('/attendance/:id', readAttendance);

module.exports = router