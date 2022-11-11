const express = require('express')
const router = express.Router();
const { addStudent } = require('../controllers/admin_controller')

//Student related routes
router.post('/add/student', addStudent)


module.exports = router