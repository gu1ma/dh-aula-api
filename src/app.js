const express = require('express');
const app = express();
const foodsController = require('./controllers/foodsController');
const sessionController = require('./controllers/sessionController');

const { promisify } = require('util');
const jwt = require('jsonwebtoken');

var cors = require('cors')

const PORT = 3000;

//nao podemos esquecer de setar o middleware para trabalharmos com 
//json
app.use(express.json());

app.use(cors());

//nosso famoso hello world
app.get('/', (req, res) => res.send('Olá mundo!'))

app.post('/sign-in', sessionController.signIn);

/* ROTAS PARA LISTAGEM */
//Crie a rota de listagem de comidas (aqui devemos listar todas as comidas)
//dei uma colher de chá pra vcs e já criei a roda inicial
app.get('/foods', foodsController.listAll);

//Crie a rota para listar uma determinada comida pelo id 
app.get('/foods/:id', foodsController.findById);

//Crie a rota para listar uma determinada comida pelo nome 
app.get('/foods/name/:foodName', foodsController.findByName);

//Crie a rota para listar uma ou mais comidas pelo tipo (entrada, prato principal, sobremesa)
app.get('/foods/type/:foodType', foodsController.findByType);

/* ROTAS PARA CADASTRO */
//Crie uma rota para cadastrar uma nova comida 

app.use(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'token not provided' });
    }
    
    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, '123456789');
        req.userId = decoded.id;
    
        return next();
      } catch (err) {
        return res.status(401).json({ message: 'token invalid!' });
      }
})

/* As rotas de cadastro, atualização e deleção só podem ser feitas pelo usuário admin */
app.post('/foods', foodsController.createNewFood);

/* ROTAS PARA ATUALIZACAO */
//Crie uma rota para atualizar uma determinada comida
app.put('/foods/:id', foodsController.updateFoodById);

/* ROTAS PARA DELECAO */
//Crie uma rota para deletar uma determinada comida
app.delete('/foods/:id', foodsController.removeFoodById);


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));