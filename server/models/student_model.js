const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll_no: { type: String, required: true },
    course: { type: String, required: true },
    current_semester: { type: String, required: true },
    dob: { type: String, required: true },
    doj: { type: String, required: true },
    sex: { type: String, required: true },
    place_of_birth: { type: String, required: true },
    department: { type: String, required: true },
    supervisor: { type: String, required: true },
    college_mail: { type: String, required: true },
    password: { type: String, required: true },
    hsc: {
        type: Map, of: String, default: {
            qualification: "",
            percentage: "",
            year_of_passing: ""
        }
    },
    ssc: {
        type: Map, of: String, default: {
            qualification: "",
            percentage: "",
            year_of_passing: ""
        }
    },
    academic_details: {
        type: Map, default: {
            "semester_1": "",
            "semester_2": "",
            "semester_3": "",
            "semester_4": "",
            "semester_5": "",
            "semester_6": "",
            "semester_7": "",
            "semester_8": "",
        }
    },
    current_semester_results: { type: Map, default: {} },
    attendance_details: { type: Map, default: {} }

}, {
    timestamps: true
})

const studentCollection = mongoose.model('student', studentSchema, 'students');

module.exports = studentCollection