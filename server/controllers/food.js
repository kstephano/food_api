const foodData = require('../data');

class Food {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.origin = data.origin;
        this.numOfIngredients = data.numOfIngredients;
    }

    static get allFood() {
        return foodData.map((food) => new Food(food));
    }

    static findById(id) {
        const food = null;
        foodData.forEach(data => {
            if (data.id === id) {
                food = data
            }
        })
        return food;
    }
}

module.exports = Food;