const studentModel = require('../models/student_model')

const readEvents = (req, res) => {

}

const readExamResults = async (req, res) => {
    try {
        const id = req.params.id
        const exam_results = await studentModel.find({ _id: id }).current_semester_results
        return res.status(200).json({
            exam_results: exam_results
        })
    } catch (err) {
        console.log(err);
    }
}

const getUserInfo = async (req, res) => {
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

const readAttendance = async (req, res) => {
    try {
        const id = req.params.id
        const attendance = await studentModel.findOne({ _id: id }).attendance_details
        return res.status(200).json({
            attendance_res: attendance
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    readEvents,
    readExamResults,
    getUserInfo,
    readAttendance
}