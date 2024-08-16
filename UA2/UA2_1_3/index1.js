//Comunicação via socket

const net = require('net'); //net é Módulo Core do NodeJs

//Criação de um servidor que escuta na porta 1234 e envia uma string com data hora (socket)
const server = net.createServer((socket) => {
    socket.end(`Hora no servidor: ${new Date()}\n`); }).on('error', (err) => { throw err; 
});

server.listen(1234);

//Lado do cliente que se conecta ao servidor, busca a informação por 5 enlaçes, exibe no console e depois se auto destrói
for(let i=1; i<=5; i++){
    const client = net.createConnection(1234,"localhost");
    client.on('data', (dados) => {    // classe Buffer
        console.log(dados.toString());
    })
    .on('end', () => {client.destroy();});
}