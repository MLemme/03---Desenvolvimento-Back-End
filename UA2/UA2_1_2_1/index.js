const $fs = require("fs");

$fs.appendFile('log.txt',`Escrito em ${new Date()}\n`,'utf8',(err) => { //Aconteceu erro, explode e para o node, se não, escreve o arquivo
    if (err) throw err;
    console.log("Linha adicionada");
});