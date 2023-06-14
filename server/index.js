const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");



app.get('/', (req, res) => {
    res.send('Welcome  Varun  Page!');
    }
);

app.listen(7000, () => {
    console.log('server is running !');
    }
);
