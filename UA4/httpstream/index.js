const http = require('http');
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.request.url === '/measurements.json') {
        ctx.response.set('content-type', 'application/json');
        ctx.body = fs.createReadStream('./measurements.json',{highWaterMark: 16});
    }
});

http.createServer(app.callback()).listen(3000,()=>console.log("ativo"));