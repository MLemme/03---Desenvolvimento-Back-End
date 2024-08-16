const express = require('express');

const redis = require('redis');

const redisClient = redis.createClient();
redisClient.on("error", (err) => console.log(`Erro: ${err}`));

const parser = require('cookie-parser');

const session = require('express-session');

const { promisify } = require('util');

const app = express();

async function getUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

app.use(express.static('public', {
    etag: true, lastModified: true,
    setHeaders: (res, path) => {
        const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.');
        if (path.endsWith('.html')) // Arquivo html
            res.setHeader('Cache-Control', 'no-cache');
        else if (hashRegExp.test(path)) // URL versionada
            res.setHeader('Cache-Control', 'maxage=31536000'); //ms
    }
}));

async function getCovid19Stats() {
    const response = await fetch(`https://disease.sh/v3/covid-19/all`);
    return await response.json();
}
    
const redisGetAsync = promisify(redisClient.get).bind(redisClient);
    
app.get('/covid', async (req, res) => {
    let stats = null;
    try { stats = await redisGetAsync('covidStats'); 
    } catch (err) {}
    if (stats != null) {
        res.status(200).send(JSON.parse(stats));
        return;
    }
    try {
        stats = await getCovid19Stats(); // 3600 segundos
        redisClient.setex('covidStats', 3600,
        JSON.stringify(stats));
        res.status(200).send(stats);
    } catch (err) { res.sendStatus(500); }
});

app.get('/paises', async (req, res) => {
    try {
        const statsTxt = await redisClient.get('paises');
        if (statsTxt!= null) {
            res.status(200).send({from: "cache",
            content: JSON.parse(statsTxt)});
            return;
        }
    } catch (err) {
        console.log(err);
    }
    try {
        const stats = await
        getUrl('https://restcountries.com/v3.1/all');
        //getUrl('https://disease.sh/v3/covid-19/all');
        redisClient.set('paises', JSON.stringify(stats), { EX: 60 });
        res.status(200).send({from: "server", content: stats});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.use(session({
    secret: 'Ax0$%s14@FX2az1k^2nM', 
    resave: true,
    saveUninitalized: true
}))

app.use(parser())

app.use(express.static('public', {
    etag: true, lastModified: true,
    setHeaders: (res, path) => {
    if (path.endsWith('.html'))
    res.setHeader('Cache-Control', 'no-cache');
    // Conteúdo em cache, mas com revalidação no servidor
    }}));

app.get('/getcookie',(req,res) => {
    console.log(req.cookies);
    res.send(req.cookies['Acesso']);
})

app.get('/setcookie',(req,res) => {
    res.cookie(`Acesso`,`Acessado em ${new Date()}`); //para usar variavel de ambiente, usar ` para a string

    res.send('Cookie foi salvo com sucesso');
});

app.get('/contador',(req,res)=>{
    let contagem = 0;
    if(req.session.contagem) contagem = req.session.contagem;
    contagem++;
    req.session.contagem = contagem;
    res.send(`Valor Atual: ${contagem}`); //Escreve sempre no Body
})

app.get('/',(req,res)=>{
    req.session.destroy((error) => {console.log("Sessão removida")});
    res.send("Sessão removida");
})

app.get('/exemplo_cache', (req, res, next) => {
    res.set('Cache-control', 'private, max-age=300')
    res.json({'mensagem': 'alo mundo'});
})
redisClient.connect().then(
    app.listen(3000,()=>console.log('Servidor executando - porta 3000')) //porta no servidor (IP local ou da máquina?) onde vai ouvir os comandos
    //app.listen(3000, console.log(‘Servidor na porta 3000’))
);
//redis-cli -h localhost -p 6379
