const foodData = require('../../data');

class Food {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.origin = data.origin;
    }

    static get allFood() {
        return foodData.map((food) => new Food(food)).sort((food1, food2) => {
            return food1.id - food2.id;
        });
    }

    static findById(id) {
        try {
            const data = foodData.filter((food) => food.id === id)[0];
            const food = new Food(data);
            return food;
        } catch (e) {
            throw new Error("That does does not exist!");
        }
    }

    static create(food) {
        const id = foodData.length + 1;
        const newFood = new Food({ id, ...food });
        foodData.push(newFood);
        return newFood;
    }

    delete() {
        const food = foodData.filter((food) => food.id === this.id)[0];
        foodData.splice(foodData.indexOf(food), 1);
    }

    update(data) {
        this.id = data.id;
        this.name = data.name;
        this.origin = data.origin;
    }
}

module.exports = Food;