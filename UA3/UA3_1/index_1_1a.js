//Slide
//const express = require('express')

import express from 'express';

const app = express(); //criação do app
const port = 3000;

app.get('/', (req, res) => {
    res.json({mensagem: "Alo mundo"});
    res.end();
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
})