//Aula 1.4.3

const express = require('express');
const ArquivoPDF = require('pdfkit');
const QRCode = require('qrcode')
const app = express();

app.get('/gerarPDF', (req, res) => {
    const doc = new ArquivoPDF({bufferPages: true});
    let dados = [];
    doc.on('data', dados.push.bind(dados)); //Evento
    doc.on('end', () => {
        let pdf = Buffer.concat(dados);
        res.writeHead(200, {
        'Content-Length': Buffer.byteLength(pdf),
        'Content-Type': 'application/pdf'}).end(pdf);
        //Utilização do pdf
    });
    doc.font('Times-Roman').fontSize(16).text('APENAS UM EXEMPLO');
    doc.end();
});

app.get("/qrcode",(req,res)=>{
    QRCode.toString('https://www.google.com', {
        errorCorrectionLevel: 'H', width: 200, type: 'svg'
    }, (err, data) => {
            //Callback
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<html><body>");
            res.write(data);
            res.write("</body></html>");
            res.end();
        });
})

app.get("/hello",(req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<html><body>");
    res.write("Alo mundo");
    res.write("</body></html>");
    res.end();
    });

app.listen(3000)