//Apostila
/*
//Servidor Simples
const app1 = http.createServer((req,res)=>{
    if(req.method==="GET" && req.url.startsWith("/produtos")){
        const codigo = req.url.substring(req.url.lastIndexOf('/')+1);
        obterProduto(codigo).then((p) => {
            if(p){
                res.statusCode = 200; res.end(JSON.stringify(p));
            }
        });
    }
});

//Servidor express
const app2 = express();
app2.get('/produtos/:id', async(req,res) => {
    res.json(await obterProduto(req.params.id)); res.end();
});
*/