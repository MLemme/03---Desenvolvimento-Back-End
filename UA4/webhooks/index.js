const express=require('express');

const rotas=require('./rotas');

const app1=express(), app2=express();

app1.use(express.json()); app2.use(express.json());

app1.use("/app1", rotas);

app1.listen(3000, () => console.log('app1'));

app2.post('/webhook-client', async(req, res) => {
    console.log('Inside Callback hook', req.body);
    return res.status(200).end();
});

app2.listen(8005, () => console.log('app2'));