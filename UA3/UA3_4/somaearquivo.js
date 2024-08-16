const somar = async (a,b) => a + b;
const imprimir_soma = async(a,b) => {
    let valor = await somar(a,b);
    console.log(valor);
    return "Processo Concluido";
}

imprimir_soma(1,2).then(
    (retorno) => console.log(retorno)
);

//leitura assincrona por fs/promises
const $fs = require('fs/promises');
async function teste_leitura() {
    try {
        const data = await $fs.readFile('./teste.txt',{encoding: 'utf8'});
    console.log(data);
    } catch (err) { console.log(err); }
}

teste_leitura();
//formato arrow function
const lerarq = async()=>{
    const dados = await $fs.readFile('teste.txt','utf8');
    return dados;
}
//método then para aguardar o retorno da promise
lerarq().then((x)=>console.log(x));