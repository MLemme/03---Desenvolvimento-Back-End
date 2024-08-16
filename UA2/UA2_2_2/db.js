import { Sequelize } from "sequelize";
//Conexão com o banco de dados              //user  //pwd
const sequelize = new Sequelize("loja_node", "root","root", {
    dialect: "mysql",
    host: "127.0.0.1",
});

export default sequelize;