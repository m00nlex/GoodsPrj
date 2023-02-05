const express = require('express');
const pg = require('pg');

const {Router} = require('express');
const router = Router();


const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello Aliya!');
})
app.listen(PORT, () => {
    console.log("..SERVER STARTED!..")
})