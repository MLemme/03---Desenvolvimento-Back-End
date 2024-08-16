//Leitura de arquivos de maneira assincrona

//Slide e Apostila
const $fs = require('fs');
$fs.readFile('teste.txt','utf8',(err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
//Apostila
const fsPromises = require('fs').promises;

fsPromises.readFile("./teste.txt").then((result) => {
    console.log("Lido: " + result);
})

.catch(function (error) {
        console.log(error);
})