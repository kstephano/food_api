const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('API home page!');
});

const foodRoutes = require('./server/controllers/foods');
app.use('/foods', foodRoutes);

app.listen(port, () => {
    console.log(`Food server listening at http://localhost:${port}`);
});

module.exports = app;