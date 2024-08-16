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

const dobrar = (x) => Promise.resolve(x*2);
for(let i = 2; i>=-2; i--)
dividir(10,i).then((x1)=>dobrar(x1))
.then((x2)=>console.log(x2))
.catch((error)=>console.log(error));

const { promisify } = require('util');
const { writeFile } = require('fs');
const writeFilePromises = promisify(writeFile);
writeFilePromises('arquivo.txt', 'conteúdoarquivo').then(() => console.log('arquivo criado com sucesso!'))
.catch(err => console.log(err));

//aula
const fs = require('fs');
const ler = () => {
    let retorno = {msg:"OK", dados:""};
    const promise = new Promise((resolve,reject)=>{
        try{
            retorno.dados = fs.readFileSync('teste.txt','utf8');
            resolve(retorno);
        }catch(err){
            retorno.msg = "Erro!";
            reject(retorno);
        }
        
    })
    return promise;
}

ler().then((x)=>console.log(x));