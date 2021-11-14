const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isTypedArray } = require('util/types');
const foodsData = require('../../data');

const Food = require('../models/food');

describe ('Food model', () => {
    const testFood = {
        id: 1,
        name: 'Pasta',
        origin: 'Italy'
    };

    it('should return all foods', () => {
        const foods = Food.allFood;
        expect(foods).toEqual(foods);
    });

    it('should delete a food', () => {
        const foods = Food.allFood;
        const foodToDelete = foods[0];
        foods[0].delete();

        expect(foodsData).not.toContain(foodToDelete);
    });

    it('should update', () => {
        const foods = Food.allFood;
        const foodToUpdate = foods[0];
        foodToUpdate.update(testFood);

        expect(foodToUpdate).toEqual(testFood);
    });
})