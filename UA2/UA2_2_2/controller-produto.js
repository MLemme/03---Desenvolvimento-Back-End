import ProdutoRepo from "./model-produto.js";

export async function obterTodos() {
    return await ProdutoRepo.findAll();
}
export async function obterProduto(codigo) {
    return await ProdutoRepo.findByPk(codigo);
}

export async function criarProduto(nome,quantidade) {
    const produto = await ProdutoRepo.create({nome: nome, quantidade: quantidade});
    return produto.codigo;
}