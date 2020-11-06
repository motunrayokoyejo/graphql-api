const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const gql = require('graphql-tag')
const { buildSchema } = require('graphql')
const fetch = require('node-fetch');
// const schema = require('./schema')
// const rootValue = require('./rootvalue')

const app = express()
const schema = buildSchema(`
type Query {
    calculatePrice (type: String!, margin: Float!,exchangeRate :Int! ) : Int
}
`)
const rootValue = {
    calculatePrice : (type,margin,exchangeRate) => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
  .then(res => res.json())
  .then(json => {
      const btcRate = json.bpi.USD.rate_float
      const marginPercent = margin * btcRate
      console.log({rate: btcRate,
        margin: margin})
      if(type.toString().toLowerCase() === "buy") {
       const computedValue = btcRate + marginPercent
       return computedValue/exchangeRate
      }
      else if (type.toString().toLowerCase() === "sell") {
          const computedValue = btcRate - marginPercent
          return computedValue/exchangeRate
      }
      console.log(json.bpi.USD)
  })
  .catch(err => console.log(err))
    }
  }

app.use('/graphiql', graphqlHTTP({schema, rootValue, graphiql: true}));



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server running")
});

