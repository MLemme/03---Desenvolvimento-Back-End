
//Vai criar os eventos para fila
const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

eventEmitter.on('valor', (valor) => {
    console.log(`Emitido o valor ${valor}`)
})

for(let i = 1; i<=100; i++)
    eventEmitter.emit('valor',i)

//Serve para tratar eventos sob demanda, quando os dados são atualizados em tempo real, onde a função captura os trechos e emite assim que criados
const fs = require('fs');
const readStream = fs.createReadStream('./teste.txt');
readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
// timer são processados os temporizadores
console.log('Início');
setTimeout(() => {
    console.log('Timeout');
}, 2000);

console.log('Fim');
// fase de check, ocorre o processamento de qualquer callback adicionada com setImmediate, e a última fase, que é conhecida como close callbacks, executa callbacks para eventos do tipo close
const net = require('net');
const server = net.createServer((socket) => {
    socket.on('close', () => {
        console.log('Socket fechado');
    });
});
server.listen(3000);
