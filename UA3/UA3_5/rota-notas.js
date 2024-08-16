const express = require('express');
const NotasDAO = require('./daos/notas-dao.js');
const router = express.Router();
const dao = new NotasDAO();

router.get('/', async(req,res)=>{
    res.json(await dao.obterTodos());
})
router.get('/:id', async(req,res)=>{
    res.json(await dao.obter(req.params.id));
})
router.post('/', async(req,res)=>{
    res.json(await dao.incluir(req.body));
})
router.delete('/:id', async(req,res)=>{
    res.json(await dao.excluir(req.params.id));
})
router.put('/:id', async(req,res)=>{
    res.json(await dao.alterar(req.params.id,req.body));
})

module.exports = router