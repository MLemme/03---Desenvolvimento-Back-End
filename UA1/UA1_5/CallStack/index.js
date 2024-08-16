//Operação sincrona no NodeJS - Call Stack
const f1 = (a,b) => a + b;
const f2 = (a,b) => {
    valor = f1(a,b);
    console.log(valor);
};
const f3 = (a) => {
    for(let i=1; i<=2; i++)
    f2(a,i);
}
f3(10);