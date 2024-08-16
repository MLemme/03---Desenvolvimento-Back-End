import $fs from 'fs';

const reader = $fs.createReadStream('log.txt', {
    flag: 'r', encoding: 'UTF-8',
    start: 5, end: 200, highWaterMark: 10
});

reader.on('data', (chunk) => { console.log(chunk); });

import http from 'http'

const server = http.createServer((req,res) =>{
    res.write("A");
    res.write("B");
    res.end("C");
}).on('close',()=>console.log("Servidor encerrado"));

//Evento error - objeto on error - no erro executa esta callback, sendo erro na variavel "e"
server.on('error', (e) => {
    if (e.code == 'EADDRINUSE') {
    console.log('Endereço em uso, nova tentativa...');
    setTimeout( ( ) => {
    server.close(); server.listen(PORT, HOST);
    }, 1000);
    }});

//faz com que o servidor seja fechado após 6 segundos
setTimeout(()=>server.close(),6000);

server.listen(3300);

const req = http.request(
    {hostname: 'localhost', port: 3300, method:'GET'},
    (res) => {
        res.on('data', (d) => console.log("Resp: "+d.toString()));
        res.on('end', () => console.log("Fim da comunicação"));
        res.on('close', () => console.log("Conexão encerrada"));
    });

req.end();