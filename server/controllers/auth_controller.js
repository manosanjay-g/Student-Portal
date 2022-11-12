const studentModel = require('../models/student_model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         if (!(email && name && password)) {
//             return res.status(400).json({
//                 error: "All input are required"
//             })
//         }
//         const oldUser = await studentModel.findOne({ email });
//         if (oldUser) {
//             return res.status(409).json({
//                 error: "User already exists"
//             })
//         }

//         encryptedPassword = await bcrypt.hash(password, 15);

//         const user = await studentModel.create({
//             name,
//             email: email.toLowerCase(),
//             password: encryptedPassword,
//         });

//         const token = jwt.sign({
//             user_id: user._id,
//             email
//         }, process.env.JWT_KEY);
//         user.token = token;
//         res.status(201).json({
//             user_res: user,
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }

const login = async (req, res) => {
    try {
        const { college_email, password } = req.body;
        if (!(college_email && password)) {
            res.status(400).json({
                error: "All inputs are required"
            })
        }
        const user = await studentModel.findOne({ college_email });
        if (user == null) {
            return res.status(400).json({
                error: "User does not exist"
            })
        }

        const decryptedPassword = await bcrypt.compare(password, user.password);
        console.log(decryptedPassword);
        if (user && decryptedPassword) {
            const token = jwt.sign({
                user_id: user._id,
                college_email
            }, process.env.JWT_KEY)
            user.token = token;
            return res.status(200).json({
                token: user.token,
                id: user._id
            });
        }
        res.status(400).json({
            error: "Invalid Credentials"
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    login
}