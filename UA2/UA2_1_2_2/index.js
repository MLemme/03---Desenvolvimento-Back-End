//Utilizando o type module no package json faz abertura, escrita e fechamento de uma arquivo com uso do descritor
import { open, close, appendFile } from
"node:fs"
const closeArq = (fd) => {
    close( fd, (err) => { if (err) throw err; } );
}
open( 'log.txt', 'a', (err,fd) => { //utilizando append 'a'
    if (err) throw err;
    appendFile( fd, `Escrito em ${new Date()}\n`,
    'utf8',
    (err) => { closeArq(fd); if (err) throw err; });
});

//da mesma maneira, faz uma leitura assincrona do arquivo, obtendo partes do conteudo (chunk) a cada evento
//ler por demanda
import $fs from 'fs';
const reader = $fs.createReadStream('log.txt',
{
    flag: 'r', encoding: 'UTF-8',
    start: 5, end: 200, highWaterMark: 10
});
reader.on('data', (chunk) => {console.log(chunk); });