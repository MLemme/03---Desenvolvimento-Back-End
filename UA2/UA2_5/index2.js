//Slide
//Faltou no slide \/
import http from "http";
import {criarProduto, obterTodos, removerProduto, alterarProduto} from "./controller-produto.js";
//Faltou no slide /\
const server = http.createServer((req,res)=>{
    if(req.url==="/produtos" && req.method==="GET")
        obterTodos().then((dados)=>res.end(JSON.stringify(dados)));
    else if(req.url==="/produtos" && req.method==="POST"){
        let dados = '';
        req.on( 'data', (x) => dados+=x ); //Pacote HTTP tem limite de tamanho, então este evento se repete até terminar a trasmissão
        req.on( 'end', () => {
            const produto = JSON.parse(dados);
            criarProduto(produto.nome,produto.quantidade).then((codigo)=>{
                res.statusCode = 201;
                res.end(`Produto criado: ${codigo}`);
            });
        })
    } else {
        res.statusCode = 404;
        res.end('404: Not Found');
    }
});

server.listen(3000);

/*
//Cliente
const req = http.request(
    {
        hostname: "localhost",
        port: 3000,
        method: "POST",
        path: "/produtos"
    },
        (res)=>{
            res.on("data",(d)=>console.log(d.toString()));
        }    
)

req.write(JSON.stringify({nome:"Carambola",quantidade:"150"}));
req.end();
*/