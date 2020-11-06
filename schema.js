const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Query {
    calculatePrice (type: String!, margin: Float!,exchangeRate :Int! ) : Float
}
`)