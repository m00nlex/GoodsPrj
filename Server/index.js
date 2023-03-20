const express = require('express');
const pg = require('pg');
const config = require('config');
const userRouter = require('./routes/user.routes')
const path = require('path');
const PORT = config.get('server.PORT');

const app = express();

app.use(express.json())
app.use('/api', userRouter)
app.use('/css', express.static(__dirname + 'public/css'))
app.get('/',(req,res) => {
    res.render('index', { text: 'Hey' })
})

app.listen(PORT, () => {
    console.log(`..SERVER STARTED on port ${PORT}!..`)
})