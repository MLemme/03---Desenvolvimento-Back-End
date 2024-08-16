'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  //Hooks criados para encripitação
  User.beforeCreate(async(user,options)=>{
    if(user.senha){
      const bcrypt = require('bcrypt');
      const salt = await bcrypt.genSalt(10, 'a');
      user.senha = await bcrypt.hash(user.senha, salt);
    }
  });
  User.beforeUpdate(async(user,options)=>{
    if(user.senha){
      const bcrypt = require('bcrypt');
      const salt = await bcrypt.genSalt(10, 'a');
      user.senha = await bcrypt.hash(user.senha, salt);
    }
  });

  return User;
};