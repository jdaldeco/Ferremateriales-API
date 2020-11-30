const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');

const app = express();

const corsOptions = {
    exposedHeaders: 'Authorization',
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/api', indexRoutes);

module.exports = app;