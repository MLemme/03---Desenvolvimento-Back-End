const {GraphQLObjectType, GraphQLString, GraphQLSchema} = require('graphql');

const produtos = [
                    {id: '1', nome: 'Teclado'},
                    {id: '2', nome: 'Mouse'},
                    {id: '3', nome: 'Monitor'}
                ]

const ProdutoType = new GraphQLObjectType({name: 'Produto',fields: () => ({id: {type: GraphQLString},nome: {type: GraphQLString}})})
const ProdutoQuery = new GraphQLObjectType({name: 'findProduto',fields: {produto: {type: ProdutoType, args:{id:{type:GraphQLString}},
    resolve(parent, args) {
        return produtos.find((prod)=>prod.id==args.id)
    }}
}})

module.exports = new GraphQLSchema({query: ProdutoQuery})