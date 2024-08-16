//Na forma mais simples, podemos liberar o acesso para qualquer origem, o que pode
//facilitar os testes, mas denota uma falha de segurança. Na listagem seguinte, temos uma
//configuração totalmente aberta.

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: '*'}));

//Se quisermos restringir o acesso a um conjunto de servidores específicos, o que é muito
//comum na comunicação entre empresas, podemos especificar quais domínios serão aceitos
//em um vetor.

app.use(cors({origin: ['https://www.servidor1.io','https://www.servidor2.com']}));

//Em algumas situações, desejamos fornecer uma mensagem indicando que o recurso
//solicitado não pode ser recuperado pelo domínio. O objeto cors permite a definição de uma
//função para o tratamento da origem.

const allowedOrigins=['http://localhost:300','http://a.com'];
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'Proibido pelo CORS';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

//Também é possível configurar o uso do cors em um endpoint específico, sem alterar os
//demais tratamentos para as rotas. Caso seja utilizado sem um atributo de origem (origin),
//o padrão é deixar o acesso totalmente aberto

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'Rota habilitada pelo CORS'})
})

//Limitando os métodos que o servidor vai aceitar através do CORS
app.use(cors({methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));

//Limitando na rota, com aplicação do CORS, devolvendo o recurso no retorno
app.get('/ingredients', cors(), (req, res, next) => {
    res.send(ingredients);
});

//Se os trechos não forem encontrados na whitelist ocorre o bloqueio do domínio
const whitelist = ['http://developer1.com', 'http://developer2.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) { callback(null, true) }
        else { callback(new Error()) }
    }
}