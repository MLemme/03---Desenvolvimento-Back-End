//Função Assincorna no NodeJS
const somar = async (a,b) => a + b;

const imprimir_soma = async(a,b) => {
    let valor = await somar(a,b); //Bloqueante mas apenas dentro da função assíncrona
    console.log(valor);
    return "Processo Concluido";
}

imprimir_soma(1,2).then((retorno) => console.log(retorno)); //Envia a resposta em um callback, não bloqueando, enviando a resposta quando pronta encapsulada na função

const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

eventEmitter.on('valor', (valor) => {
    console.log(`Emitido o valor ${valor}`)
})

for(let i = 1; i<=100; i++)
    eventEmitter.emit('valor',i)

//Leitura de Arquivo Assincrona
//Utlizando callback
const $fs1 = require('fs');
$fs1.readFile('teste.txt','utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});
//Utilizando uma promise
const $fs2 = require('fs/promises');
async function teste_leitura() {
    try {
        const data = await $fs2.readFile('teste.txt',{encoding: 'utf8'});
        console.log(data);
    } catch (err) { console.log(err); }
}

teste_leitura()