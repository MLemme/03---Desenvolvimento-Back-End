const WebSocket = require('ws');

const express = require('express');

const app=express()

const onMessage = (ws, d) => {ws.send(`recebido! ${d}`);}

const onConnection = (ws, req) => {
    ws.on('message', data => onMessage(ws, data));
    console.log(`onConnection`);
}

const server = app.listen(3300,()=>console.log('executando'));

const wss = new WebSocket.Server({server});

wss.on('connection', onConnection);

//não funcionou com a extensão no Edge!!