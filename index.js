const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const gql = require('graphql-tag')
const { buildSchema } = require('graphql')
// const schema = require('./schema')
// const rootValue = require('./rootvalue')

const app = express()
const schema = buildSchema(`
type Query {
    calculatePrice (type: String!, margin: Float!,exchangeRate :Int! ) : String
}
`)
const rootValue = {
    calculatePrice : (type,margin,exchangeRate) => {

        return 'This is working'
    }
  }

app.use('/graphiql', graphqlHTTP({schema, rootValue, graphiql: true}));



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server running")
});

