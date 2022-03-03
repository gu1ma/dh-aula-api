const foodsMock = require('../mocks/foods');

let foods = foodsMock;

const listAll = (req, res) => {
    return res.status(200).send(foods);
}

const findById = (req, res) => {
    const id = req.params.id;
    const food = foods.find(food => {
        if(food.id == id) {
            return true;
        }

        return false;
    })
    return res.status(200).send(food);
}

const findByName = (req, res) => {
    const foodName = req.params.foodName;
    const food = foods.find(food => {
        if(food.name == foodName) {
            return true;
        }

        return false;
    })
    return res.status(200).send(food);
}

const findByType = (req, res) => {
    const foodType = req.params.foodType;
    const food = foods.filter(food => {
        if(food.type == foodType) {
            return true;
        }

        return false;
    })
    return res.status(200).send(food);
}

const createNewFood = (req, res) => {
    const { name, desc, type } = req.body;
    const id = foods.length+1;

    foods.push({
        id, 
        name, 
        type, 
        desc
    });

    return res.status(201).send(foods[foods.length - 1]);
}

const updateFoodById = (req, res) => {
    const { name, desc, type } = req.body;
    const id = req.params.id;

    foods = foods.map(food => {
        if(food.id == id) {
            return {
                id: food.id,
                name, 
                desc,
                type
            }
        }

        return food;
    });

    return res.status(200).send(foods.find(food => food.id == id));
}

const removeFoodById = (req, res) => {
    const id = req.params.id;

    foods = foods.filter(food => {
        if(food.id == id) {
            return false;
        }

        return true;
    });

    return res.status(200).send('Food removed successfully');
}

module.exports = {
    listAll,
    findById,
    findByName,
    findByType,
    createNewFood,
    updateFoodById,
    removeFoodById
}