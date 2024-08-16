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


//Encadeamento de Then, ou de funções assincronas
const dobrar = (x) => Promise.resolve(x*2); // Async (x*2)
for(let i = 2; i>=-2; i--)
    dividir(10,i).then((x1)=>dobrar(x1))

.then((x2)=>console.log(x2))

.catch((error)=>console.log(`Isso é uma ${error}`));

//Questão do Quiz UA1 - 1
//const x = (a, b) => (b > 0) ? a + x(a, b - 1 ) : 0;
//console.log(x(2,3));