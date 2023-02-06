const express = require('express');
// const pg = require('pg');

const PORT = process.env.PORT || 3000;

// const {Router} = require('express');
// const router = Router();



const app = express();

app.get('/', (req, res) => {
    res.send('Hello Aliya!');
})

app.get('/que', function(req, res) {
    res.sendfile('index.html');
});

app.listen(PORT, () => {
    console.log(`..SERVER STARTED on port ${PORT}!..`)
})