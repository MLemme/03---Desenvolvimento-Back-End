const express = require('express'); //servidor

const rotaNotas = require('./rotas.js'); //rotas

const db = require('./models/index.js'); //banco de dados

const bodyParser = require('body-parser'); //interpretador dos body/pacotes JSON

const app = express();
app.use(bodyParser.json()); //Para tratar os dados em formato JSON necessários no REST

/*
app.get('/', (req,res)=>{
    db.Nota.findAll().then((dados)=>{
        console.log(dados);
        res.json(dados);
    });
})
*/

// db.Nota.findAll().then(dados=>console.log(dados));

app.use('/notas', rotaNotas); //usa as rotas criadas

app.listen(3000,()=>console.log("Servidor Pronto"));

module.exports = app