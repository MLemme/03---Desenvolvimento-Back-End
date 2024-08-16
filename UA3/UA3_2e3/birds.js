/*
//Servidor
const express = require('express');

const app = express();

//Objeto Router - para associar rotas ao servidor criado
let router = express.Router();

//middleware que executa antes de responder a rota
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now()); next();
});

router.get('/', function(req, res) {
    res.send('Birds home page');
});

app.use('/birds', router);



app.listen(3000,()=>console.log("Servidor Pronto"));
*/