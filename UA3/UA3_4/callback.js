//Callback para pegar o conteudo de uma página com uma requisição http
//Slide
let $http = require("http");
const callback = (data) => {
    console.log(data);
};
const exibir_pagina = (url) => {
    $http.get(url, callback);
}

exibir_pagina("http://www.google.com");


const express = require('express');
const app = express();
app.listen(3000);

//Geração de um qrcode
const QRCode = require('qrcode');
app.get("/qrcode",(req,res)=>{
    QRCode.toString('https://www.google.com', 
        {
            errorCorrectionLevel: 'H', 
            width: 200, type:'svg'  
        }, 
        (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("<html><body>");
            res.write(data);
            res.write("</body></html>");
            res.end();
        }
    )
})

//Arquivos PDF, geração
const ArquivoPDF = require('pdfkit');
app.get('/gerarPDF', (req, res) => {
    const doc = new ArquivoPDF({bufferPages: true});
    let dados = [];
    doc.on('data', dados.push.bind(dados)); //Evento de recepção de dados
    doc.on('end', () => {                   //Evento de fim de dados
        let pdf = Buffer.concat(dados);
        /*res.writeHead(200, {
        'Content-Length': Buffer.byteLength(pdf),
        'Content-Type': 'application/pdf'}).end(pdf);*/
        //Utilização do pdf
    });
    doc.font('Times-Roman').fontSize(16).text('EXEMPLO');
    doc.end();
});