'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //Seeder criado para pode gerar um usuário do tipo Administrador
    const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt(10, 'a');
    const senhaCripto = await bcrypt.hash('root', salt);
    await queryInterface.bulkInsert('Users', [{
      nome: 'Administrador do Sistema', 
      login: 'root',
      senha: senhaCripto,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
