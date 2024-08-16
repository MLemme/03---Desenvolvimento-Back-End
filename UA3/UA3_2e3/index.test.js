const server = require('./index.js')
const request = require('supertest');

describe('Teste do servidor', () => {
    it('Criacao de nota', async () => {
        const response = await request(server).post('/notas').send({titulo: "Tarefa Teste", descricao:"Apenas um Teste"});
        expect(response.status).toBe(200);
        expect(response.body.titulo).toBe("Tarefa Teste");
    });
});