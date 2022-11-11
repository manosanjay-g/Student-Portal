const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

//Routes Initialization

//DB Initialization
const connectDB = require('./configs/database_config');

//Middleware Declaration

//Middleware Initialization

//Routes

app.get('/', (req, res) => {
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