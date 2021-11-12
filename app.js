const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const foodRoutes = require('./server/controllers/foods');
app.use('/foods', foodRoutes);

app.post('/', (req, res) => {

});

app.listen(port, () => {
    console.log(`Food server listening at http://localhost:${port}`);
});

module.exports = app;