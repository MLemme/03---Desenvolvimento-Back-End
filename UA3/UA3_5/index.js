const express = require('express')
const bodyParser = require('body-parser')
const rotaNotas = require('./rota-notas')

const app = express();

app.use(bodyParser.json());

app.use('/notas', rotaNotas);

app.listen(3000, () => console.log("Servidor pronto"));