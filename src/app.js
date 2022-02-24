const express = require('express');
const app = express();
const foodsController = require('./controllers/foodsController');

const PORT = 3000;

//nao podemos esquecer de setar o middleware para trabalharmos com 
//json
app.use(express.json());

//nosso famoso hello world
app.get('/', (req, res) => res.send('Olá mundo!'))

/* ROTAS PARA LISTAGEM */
//Crie a rota de listagem de comidas (aqui devemos listar todas as comidas)
//dei uma colher de chá pra vcs e já criei a roda inicial
app.get('/foods', foodsController.listAll);

//Crie a rota para listar uma determinada comida pelo id 

//Crie a rota para listar uma determinada comida pelo nome 

//Crie a rota para listar uma ou mais comida pelo tipo (entrada, prato principal, sobremesa)

/* ROTAS PARA CADASTRO */
//Crie uma rota para cadastrar uma nova comida 

/* ROTAS PARA ATUALIZACAO */
//Crie uma rota para atualizar uma determinada comida

/* ROTAS PARA DELECAO */
//Crie uma rota para deletar uma determinada comida


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));