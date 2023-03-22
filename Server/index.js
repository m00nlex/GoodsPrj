const express = require('express');
const pg = require('pg');
const userRouter = require('./routes/user.routes')
require('dotenv').config()
const sequelize = require('./db/db')
const path = require('path');
const models = require('./models/models.js')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use('/api', userRouter)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`..SERVER STARTED on port ${PORT}!..`)
        })
    } catch (e){
        console.log(e)
    }
}

start()