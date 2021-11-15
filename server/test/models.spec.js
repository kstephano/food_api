const Food = require('../models/food');

describe ('Food model', () => {
    const testFood = {
        id: 1,
        name: 'Pasta',
        origin: 'Italy'
    };

    it('should return all foods, sorted by id', () => {
        const foods = Food.allFood;
        expect(foods).toEqual([
            { id: 1, name: "Pizza", origin: "Italy" },
            { id: 2, name: "Ramen", origin: "Japan" },
            { id: 3, name: "Roast Dinner", origin: "England" }
        ]);
    });

    it('should delete a food', () => {
        const foods = Food.allFood;
        const foodToDelete = foods[0];
        foods[0].delete();
        expect(Food.allFood).not.toContain(foodToDelete);
    });

    it('should update', () => {
        const foods = Food.allFood;

        const foodToUpdate = foods[0];
        foodToUpdate.update(testFood);

        expect(foodToUpdate).toEqual(testFood);
    });
})