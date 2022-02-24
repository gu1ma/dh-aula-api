const foodsMock = require('../mocks/foods');

let foods = foodsMock;

const listAll = (req, res) => {
    return res.status(200).send(foods);
}

//crie os demais metodos da nossa api

module.exports = {
    listAll,
    //exporte aqui os novos metodos criados da nossa api
}