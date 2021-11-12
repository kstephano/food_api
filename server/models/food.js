const foodData = require('../../data');

class Food {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.origin = data.origin;
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

    static create(food) {
        const id = foodData.length++;
        const newFood = new Food({ id, ...food });
        foodData.push(newFood);
        return newFood;
    }

    static delete() {
        const food = foodData.filter((food) => food.id === this.id)[0];
        foodData.splice(foodData.indexOf(food), 1);
    }
}

module.exports = Food;