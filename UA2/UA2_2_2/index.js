import ProdutoRepo from "./model-produto.js";
//slide
export async function imprimirTodos() {
    const produtos = await
    ProdutoRepo.findAll();
    console.log('Slide',JSON.stringify(produtos));
}
imprimirTodos();

//apostila
import {obterTodos} from "./controller-produto.js";
obterTodos().then((x)=>console.log('Apostila',JSON.stringify(x)));