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
}