//Criação da classe DAO Data Access Object com seu CRUD
const db = require('../models/index.js');

class NotasDAO{
    obterTodos = async() => await db.Nota.findAll();
    obter = async(id) => await db.Nota.findByPk(id);
    incluir = async(objJSON) => await db.Nota.create(objJSON);
    alterar = async(_id, objSON) => await db.Nota.update(objSON,{where: { id: _id }});
    excluir = async(_id) => await db.Nota.destroy({ where: { id: _id } });
}

module.exports = NotasDAO