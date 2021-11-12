const express = require('express');
const router = express.Router();

const Food = require('../models/food');

router.get('/', (req, res) => {
    const foodData = Food.allFood;
    res.send(foodData);
});

router.get('/cats/:id', (req, res) => {
    try {
        const foodId = parseInt(req.params.id);
        const selectedFood = Food.findByName(foodId);
        if (!selectedFood) {
            throw new Error('This food does not exist');
        }
        res.send(selectedFood);
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});

module.exports = router;