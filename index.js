const express = require('express');
const pg = require('pg');
const config = require('config');
const userRouter = require('./routes/user.routes')

const PORT = config.get('server.PORT');

const app = express();
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`..SERVER STARTED on port ${PORT}!..`)
})