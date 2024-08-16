//Managed Transaction
const {Pessoa, sequelize} = require('./models')
/*
const incluirPessoa = async () => {
    try { // Managed Transaction
        const p = await sequelize.transaction(async (t) => {
            const p1 = await Pessoa.create({nome: 'Ana', sobrenome: 'Clara'}, {transaction: t});
            return p1;
        });
        return p; // Neste ponto ocorre commit automático
    } catch(error) {} // No caso de erro, rollback automático
    }

incluirPessoa().then((p)=>console.log(JSON.stringify(p)));
*/
//Unmanaged Transaction - commit e rollback definidos pelo dev
const incluirPessoaU = async () => {
    const t = await sequelize.transaction({isolationLevel:'SERIALIZABLE'}); //Isolation level
    t.afterCommit(() => {console.log("Sucesso!");}); // A callback é executada após o commit //Hook afterCommit
    try { // Unmanaged Transaction
        // Operações no banco de dados via Sequelize
        const p = await Pessoa.create({nome: 'Milo', sobrenome: 'Paulo'}, {transaction: t});
        await t.commit();
        return p;
    } catch (error) {
        await t.rollback();
    }
}

incluirPessoaU().then((p)=>console.log(JSON.stringify(p)));
