'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dependente.belongsTo(models.Pessoa, { //Criou o relacionamento por chave estrangeira aqui
        foreignKey: 'pessoaId',
        onDelete: 'CASCADE'
      })
    }
  }
  Dependente.init({
    nome: DataTypes.STRING,
    pessoaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dependente',
  });
  return Dependente;
};