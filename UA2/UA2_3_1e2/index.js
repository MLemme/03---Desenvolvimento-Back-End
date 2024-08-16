import {imprimirTodos, obterTodos, obterProduto, obterNomeQtd, criarProduto, alterarProduto, zerarQtd, removerProduto, removerZerados} from "./controller-produto.js";

/*criarProduto("Abacate",1200).then(_ => obterTodos().then((produtos) => {
    for(let p of produtos)
        console.log(p.nome + "::" + p.quantidade)
}))*/

obterTodos().then((x)=> {
    for(let obj of x)
        console.log(JSON.stringify(obj));
});

//criarProduto("Abóbora",null).then((x)=>console.log(`Id gerado: ${x}`));

alterarProduto(2,'Banana',1001).then((x)=>console.log(JSON.stringify(x)));

//zerarQtd().then((x)=>console.log(`Alterados: ${x}`));

//removerProduto(3).then(( ) => console.log("Produto Removido"));