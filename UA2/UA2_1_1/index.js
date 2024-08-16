//Soma Assincrona - Exemplo do Assync com Await
const somar = async (a,b) => a + b;
const imprimir_soma = async(a,b) => {
    let valor = await somar(a,b); //Aguarda a resposta 
    console.log(valor);
    return "Processo Concluido";
}
imprimir_soma(1,2).then(
(retorno) => console.log(retorno) );

//Uso de Promise
const dividir = (a,b) => {
    const promise = new Promise((resolve,reject)=>{
            if(b==0){ reject("Divisao por zero"); }
            else { resolve(a/b); }
    });
    return promise;
}
for(let i = 2; i>=-2; i--)
    dividir(10,i).then((x)=>console.log(x))
    
.catch((error)=>console.log(error));

//Se quiser chamar a função de divisão, a partir de uma função marcada como async, você
//precisará utilizar await, tratando a ocorrência de exceção em um bloco com try e catch.
const exec = async () => {
    for(let i = 2; i>=-2; i--)
        try {
            console.log(await dividir(10,i));
        }catch(error){
            console.log(error);
    }
}
//e quiser gerar a exceção em uma função marcada como async, você
//precisará lançá-la através de uma cláusula throw.

const dividir2 = async(a,b) => {
    if(b==0)
        throw("Divisao por zero");
    return a/b;
}

//Série de Fibonacci
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const fibo = async(n) => {
let x1 = 1, x2 = 1;
for(let a=2; a<=n; a++){
let c = x1 + x2;
x1 = x2; x2 = c;
await sleep(10);
}
return x2;
}
const imprimir = async() => {
for(let i = 19; i >= 0; i--){
const f = await fibo(i);
console.log(`Fibo(${i}) = ${f}`);
}
}
imprimir();

/*A função imprimir pode ser reescrita para uso de then, como é apresentado na listagem seguinte.
const imprimir = () => {
    for(let i = 19; i >= 0; i--){
        fibo(i).then((f)=>console.log(`Fibo(${i}) = ${f}`));
    }
}
*/