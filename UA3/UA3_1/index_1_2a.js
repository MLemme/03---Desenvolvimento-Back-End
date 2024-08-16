//const express = require('express');
import express from 'express';

const app = express();

app.use(express.json());

let tarefas = [];

app.get('/api/tarefas', (req, res) => {
    res.json(tarefas);
    res.end();
})

app.post('/api/tarefas', (req, res) => {
    tarefas.push({ tarefa: req.body.tarefa });
    res.end();
})

app.listen(3000);