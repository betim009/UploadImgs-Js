const express = require('express');
const cors = require('cors');
const imgRoute = require('./routes/images')


const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', imgRoute)

module.exports = app;