import express from 'express';

const app = express();

app.use(express.json());

let tarefas = [ {tarefa: "compilar"},{tarefa:"testar"}];

app.get( [ '/', '/tarefas' ], (req, res) => {
    
    let conteudo = "<html><body><ul>";
    
    for(let t of tarefas)
        conteudo += `<li>${t.tarefa}</li>`;
        conteudo += "</ul></body></html>";

    res.status(200).contentType('text/html').send(conteudo);
})

app.listen(3000);