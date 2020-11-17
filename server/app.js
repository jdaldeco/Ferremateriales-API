const express = require('express');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/api', indexRoutes);

module.exports = app;