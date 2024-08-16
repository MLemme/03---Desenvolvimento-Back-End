import {imprimirTodos, obterTodos, obterProduto, obterNomeQtd, criarProduto, alterarProduto, zerarQtd, removerProduto, removerZerados} from "./controller-produto.js";

import redis from "redis";

let redisClient;

//criação de um cliente para o redis, com os eventos error e connect configurados

(async () => {
    redisClient = redis.createClient();
    redisClient.on("error",
    (error) => console.error(`Error: ${error}`));
    redisClient.on('connect',
    () => console.log("REDIS: Conectado"));
    await redisClient.connect();
})();

/* A função obter se inicia com a tentativa de obtenção da entidade, identificada pela
concatenação de “Prod”, com o código da entidade, no redis. Se conseguir obter, a entidade
é retornada, e o atributo isCached recebe true.
Quando a entidade não está no redis, ela é consultada via Sequelize, sendo adicionada,
em seguida, ao redis. Nesse caso, o atributo isCached vale false.
Ao final, é retornado um resultado em JSON, informando se a informação veio do cache
e os dados da entidade. Para efetuar um teste, complemente o código do exemplo com os
comandos da listagem seguinte.*/

const obter = async (codigo) => {
    let isCached = false, result;
    const cacheResults = await redisClient.get(`Prod${codigo}`);
    if(cacheResults){
        isCached = true; result = JSON.parse(cacheResults);
    } else {
        result = await obterProduto(codigo);
        await redisClient.set(`Prod${codigo}`,JSON.stringify(result));
    }
    return {fromCache: isCached, produto: result};
}

obter(1).then((x)=>console.log(JSON.stringify(x)));
obter(2).then((x)=>console.log(JSON.stringify(x)));
obter(1).then((x)=>console.log(JSON.stringify(x)));
