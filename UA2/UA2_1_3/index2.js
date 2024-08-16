//Comunicação via HTTP

const http = require('http'); //http é Módulo Core do NodeJs

//Criação de um servidor que escuta na porta 3000 e envia uma string que será exibida no browser
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Olá Mundo!');
})

server.listen(3000);

//Criação de um cliente, onde ele vai se conectar ao servidor, e qualquer dado provindo dele será impresso
const req = http.request(
    {hostname: 'localhost', port: 3000, method: 'GET'},
    (res) => {
        res.on('data', (d) => {
        console.log(d.toString()); }); //Recepção do dado do servidor
    });

req.end();