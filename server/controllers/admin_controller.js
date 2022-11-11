const studentModel = require('../models/student_model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            password
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

module.exports = {
    addStudent
}