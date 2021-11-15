const express = require('express');
const cors = require('cors');
const path = require('path');

const foodRoutes = require('./server/controllers/foods');
const logger = require('./server/middleware/logger');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger); // init middleware
app.use('/foods', foodRoutes);

app.get('/', (req, res) => {
    res.status(200).send('API home page');
});

module.exports = app;