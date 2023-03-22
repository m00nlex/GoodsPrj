const express = require('express');
const pg = require('pg');
const index_router = require('./routes/index_routes.js')
require('dotenv').config();
const sequelize = require('./db/db.js')
const path = require('path');
const models = require('./models/models.js')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')
const fileUpload = require('express-fileupload')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json()) //чтобы приложение могло парсить json
app.use(fileUpload({}))
app.use('/api', index_router)
app.use(errorHandler) //хэндлеры с ошибками всегда в самом конце инициализации!
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