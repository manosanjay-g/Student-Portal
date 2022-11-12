const express = require('express')
const router = express.Router();
const { addStudent, readStudent, updateStudent, deleteStudent, readStudents, deleteStudents, releaseResults, updateAttendance, readEvent, addEvent, updateEvent, deleteEvent, deleteEvents, readEvents } = require('../controllers/admin_controller')

//Student related routes
router.post('/students/', addStudent)
router.get('/students/:id', readStudent)
router.patch('/students/:id', updateStudent)
router.delete('/students/:id', deleteStudent)

router.get('/students/', readStudents)
router.delete('/students/', deleteStudents)

router.patch('/students/result/:id', releaseResults)
router.patch('/students/attendance/:id', updateAttendance)

//Event related routes
router.post('/events/', addEvent)
router.get('/events/:id', readEvent)
router.patch('/events/:id', updateEvent)
router.delete('/events/:id', deleteEvent)

router.get('/events/', readEvents)
router.delete('/events/', deleteEvents)




module.exports = router