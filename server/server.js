const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

//Router Initialization
const adminRouter = require('./routers/admin_router')
const studentRouter = require('./routers/student_router')
const authRouter = require('./routers/auth_router')

//DB Initialization
const connectDB = require('./configs/database_config');

//Middleware Declaration
const { authenticateToken } = require('./middlewares/auth_middleware')
//Middleware Initialization
app.use(cors())
app.use(express.json());

//Routes
app.use('/public', express.static('public'))
app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use('/student', authenticateToken, studentRouter)
app.get('/', authenticateToken, (req, res) => {
    res.send("Hello World");
})

//Express

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
start()