'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', showData);


function showData(req, res) {
    res.status(200).json({
        message:"Lab16 - Home page"
    })
}

app.listen(process.env.PORT, () => console.log('Server is working'));
