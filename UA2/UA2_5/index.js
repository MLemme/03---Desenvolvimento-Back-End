import http from "http";
import {imprimirTodos, obterTodos, obterProduto, obterNomeQtd, criarProduto, alterarProduto, zerarQtd, removerProduto, removerZerados} from "./controller-produto.js";

//Servidor http
const server = http.createServer((req,res)=>{
    console.log(req.url);
    //Apostila------------------------------------------------------------------------------
    const codigo = req.url.substring(req.url.lastIndexOf('/')+1);
    //--------------------------------------------------------------------------------------
    const rota = req.url.substring(req.url.indexOf('produtos'),req.url.lastIndexOf('/')); //Improviso
    if (req.url==="/produtos" && req.method==="GET")
        obterTodos().then((dados)=>res.end(JSON.stringify(dados)));
    else if(req.url==="/produtos" && req.method==="POST"){
        let dados = '';
        req.on( 'data', (x) => dados+=x );
        req.on( 'end', ()=>{
            const produto = JSON.parse(dados);
            criarProduto(produto.nome,produto.quantidade).then((codigo)=>{
                res.statusCode = 201;
                res.end(`Produto criado : ${codigo}`);
            });
        } )
    }
    else if (rota=='produtos' && req.method==="DELETE"){
        //Apostila------------------------------------------------------------------------------
        // Resposta possível para o método DELETE
        removerProduto(codigo).then(() => {
            res.statusCode = 204;
            res.end();
        });
        //--------------------------------------------------------------------------------------
    } 
    else if (rota=='produtos' && req.method==="GET"){
        //Apostila------------------------------------------------------------------------------
        // Resposta possível para o método GET
        obterProduto(codigo).then((p) => {
            if(p){
                res.statusCode = 200;
                res.end(JSON.stringify(p));
            } else {
                res.statusCode = 404;
                res.end();
            }
        });
        //--------------------------------------------------------------------------------------
    }
    else{
        //Improviso meu \/
        /*let nproduto = req.url.split("/") 
        if(nproduto[1] == 'produtos' && req.method==="GET"){
            obterProduto(nproduto[2]).then((dados)=>res.end(JSON.stringify(dados)));
        }
        else if(nproduto[1] == 'produtos' && req.method==="PUT"){
            let dados = '';
            req.on( 'data', (x) => dados+=x );
            req.on( 'end', ()=>{
                const produto = JSON.parse(dados);
                alterarProduto(nproduto[2],produto.nome,produto.quantidade).then((codigo)=>{
                    res.statusCode = 201;
                    res.end(`Produto alterado : ${nproduto[2]}`);
                });
            });
        }
        else{*/
        //Improviso meu /\
            res.statusCode = 404;
            res.end('404: Not Found');
        //}
    }
});

server.listen(3000,()=>console.log('Servidor executando - porta 3000'));

/*
//Exemplo Método POST
const req = http.request(
    {
        hostname: "localhost", 
        port:3000,
        method: "POST", 
        path:"/produtos"
    },
    (res) => { res.on("data" , (d) => console.log(d.toString()));}
)

req.write(JSON.stringify({nome:"Tomate",quantidade:450}));
req.end();
*/
/*
//Exemplo Método PUT
const req = http.request(
    {
        hostname: "localhost",
        port:3000,
        method: "PUT", 
        path:"/produtos/9"
    },
    (res)=>{res.on("data" , (d) =>console.log(d.toString()));} 
);

req.write(JSON.stringify({nome:"Abóbora",quantidade:450}));
req.end();
*/