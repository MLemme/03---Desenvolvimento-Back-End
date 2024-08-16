/*
//Servidor
const express = require('express');

const app = express();

app.listen(3000,()=>console.log("Servidor Pronto"));

//roteamento direto, nos métodos de tratamento do objeto Express, como nos exemplos da listagem seguinte.
app.get('/about', (req, res) => {res.send('método GET');});
app.put('/ab?cd/:id', (req, res) => {res.send('método PUT');});
app.post('/ab*cd', (req, res) => {res.send('método POST');});
app.delete('/ab?d', (req, res) => {res.send('método DELETE');});

//Outra opção interessante do Express é o uso de middleware na forma de filtros,
//segundo o padrão Filter Chain, em que um endpoint pode responder com uma sequência
//de callbacks, em vez de apenas um tratamento simples. Essa abordagem permite, por
//exemplo, a verificação de direitos de acesso antes de fornecer a informação para o usuário.

const cb0 = (req, res, next) => {
    console.log('CB0'); next();
}
const cb1 = (req, res, next) => {
    console.log('CB1'); next();
}

const cb2 = (req, res) => {res.send('Hello from C!');}

app.post('/example/c', [cb0, cb1, cb2]);

//Pode configurar a resposta para vários métodos HTTP simultâneos, com a utilização do método route.

app.route('/book')

    .get(function(req, res) { res.send('Get a random book'); })
    .post(function(req, res) { res.send('Add a book'); })
    .put(function(req, res) { res.send('Update the book'); });

//Você também pode aceitar todos os métodos do HTTP via método all.

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section...'); 
    next();
});


//A forma mais organizada de trabalhar no Express é através de um objeto
//Router. Ele concentra endpoints relativos, que podem ser acrescidos de um prefixo ao
//nível do objeto Express.

let router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now()); next();
});

router.get('/', function(req, res) {
    res.send('Birds home page');
});

app.use('/birds', router);
*/