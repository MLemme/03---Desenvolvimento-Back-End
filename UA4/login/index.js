const express = require('express')
const cors = require('cors')
const TokenManager = require('./token-manager')
const UserDao = require('./user-dao')

const dao = new UserDao();
const tm = new TokenManager();

const app = express()

app.use(express.json())

app.use(cors())

app.post('/login', async (req, res) => {
    const usuario = await dao.findByLoginSenha(req.body.login,req.body.senha);
    if(usuario){
        const id = usuario.id; const token = tm.sign(id);
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
})

app.post('/addUser', tm.verifyJWT, async(req,res)=>{
    const usuario = await dao.create(req.body);
    return res.json({usuario: usuario});
})

app.listen(3000,()=>console.log("Funcionando"));