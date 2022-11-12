const studentModel = require('../models/student_model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Student Related Functions
const addStudent = async (req, res) => {
    try {
        const { name, roll_no, course, current_semester, dob, doj, sex, place_of_birth, department, supervisor, college_mail, password } = req.body
        if (!(name && roll_no && course && current_semester && dob && doj && sex && place_of_birth && department && supervisor && college_mail && password)) {
            console.log(req.body);
            return res.status(400).json({
                error: "All input are required"
            })
        }
        const oldStudent = await studentModel.findOne({ college_mail: college_mail })
        if (oldStudent) {
            return res.status(400).json({
                error: "Student already exist"
            })
        }
        encryptedPassword = await bcrypt.hash(password, 15);

        const student = await studentModel.create({
            name,
            roll_no,
            course,
            current_semester,
            dob,
            doj,
            sex,
            place_of_birth,
            department,
            supervisor,
            college_mail: college_mail.toLowerCase(),
            password: encryptedPassword
        });

        const token = jwt.sign({
            student_id: student._id,
            college_mail
        }, process.env.JWT_KEY);
        student.token = token;
        res.status(201).json({
            student_res: student,
        })
    } catch (error) {
        console.log(err);
    }
}

const readStudent = async (req, res) => {
    try {
        const id = req.params.id
        const student = await studentModel.findOne({ _id: id })
        return res.status(200).json({
            student_res: student
        })
    } catch (err) {
        console.log(err);
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.id
        const { hsc, ssc, academic_details } = req.body;

        const student = await studentModel.findByIdAndUpdate({ _id: id }, {
            $set: {
                hsc: hsc,
                ssc: ssc,
                academic_details: academic_details,
            }
        })
        res.status(201).json({
            student_update_res: student
        })


    } catch (err) {
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id
        const deletedStudent = await studentModel.deleteOne({ _id: id })
        res.status(204).json({
            student_deleted_res: deletedStudent
        })
    } catch (err) {
        console.log(err);
    }
}

const releaseResults = async (req, res) => {
    try {
        const id = req.params.id
        const { current_semester_results } = req.body;

        const results = await studentModel.findByIdAndUpdate({ _id: id }, {
            $set: {
                current_semester_results: current_semester_results
            }
        })
        res.status(201).json({
            results_release_res: results
        })


    } catch (err) {
        console.log(err);
    }
}

const updateAttendance = async (req, res) => {
    try {
        const id = req.params.id
        const { attendance_details } = req.body;

        const attendance = await studentModel.findByIdAndUpdate({ _id: id }, {
            $set: {
                attendance_details: attendance_details
            }
        })
        res.status(201).json({
            attendance_details_res: attendance
        })


    } catch (err) {
        console.log(err);
    }
}

const readStudents = async (req, res) => {
    try {
        const students = await studentModel.find({})
        return res.status(200).json({
            students_res: students
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteStudents = async (req, res) => {
    try {
        const deletedStudent = await studentModel.deleteOne({})
        res.status(204).json({
            students_deleted_res: deletedStudent
        })
    } catch (err) {
        console.log(err);
    }
}

//Event Related Functions
const addEvent = async (req, res) => { }

const readEvent = async (req, res) => { }

const updateEvent = async (req, res) => { }

const deleteEvent = async (req, res) => { }

const readEvents = async (req, res) => { }

const deleteEvents = async (req, res) => { }

module.exports = {
    addStudent,
    updateStudent,
    readStudent,
    deleteStudent,
    readStudents,
    deleteStudents,
    releaseResults,
    updateAttendance,
    addEvent,
    deleteEvent,
    updateEvent,
    readEvent,
    readEvents,
    deleteEvents
}