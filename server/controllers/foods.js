const express = require('express');
const router = express.Router();

const Food = require('../models/food');

router.get('/', (req, res) => {
    const foodData = Food.allFood;
    res.status(200).send(foodData);
});

router.get('/:id', (req, res) => {
    try {
        const foodId = parseInt(req.params.id);
        const selectedFood = Food.findById(foodId);
        if (!selectedFood) {
            throw new Error('This food does not exist');
        }
        res.send(selectedFood);
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't GET: no food with the id of ${req.params.id}` });
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newFood = Food.create(data);
    res.status(201).send(newFood);
});

router.delete('/:id', (req, res) => {
    const foodToDelete = Food.findById(parseInt(req.params.id));
    foodToDelete.delete();
    res.status(204).send();
});

router.put('/:id', (req, res) => {
    try {
        const update = req.body;
        const foodToUpdate = Food.findById(parseInt(req.params.id));
        foodToUpdate.update(update);
        res.status(200).send(foodToUpdate);
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: `Couldn't UPDATE: no food with the id of ${req.params.id}` });
    }
});

module.exports = router;