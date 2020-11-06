const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const gql = require('graphql-tag')
const schema = require('./schema')
const rootValue = require('./rootvalue')

const app = express()



app.use('/graphiql', graphqlHTTP({schema, rootValue, graphiql: true}));



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server running")
});

