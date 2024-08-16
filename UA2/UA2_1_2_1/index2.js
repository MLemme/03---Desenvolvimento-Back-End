const $fs = require('fs/promises');
async function teste_leitura() {
    try {
        //Exemplo Aula
        let data = await $fs.readFile('log.txt');
        console.log(data.toString())
        //Exemplo Slide
        //const data = await $fs.readFile('log.txt', {encoding:'utf8'});
        //console.log(data);
    } catch (err) { 
        console.log(err); 
    }
}

teste_leitura();