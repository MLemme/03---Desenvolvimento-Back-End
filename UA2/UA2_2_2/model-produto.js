//Definição da entidade no arquivo
import { Sequelize } from "sequelize";

import db from "./db.js"; // Objeto sequelize

export default db.define("produto", { //todo import daqui recebera esta classe
        codigo: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    } ,
    { timestamps: false }
); // createdAt,updatedAt // com timestamp false ele deixa de criar estes dois campos