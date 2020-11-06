const { buildSchema } = require("graphql");

buildSchema(gql`
type Query{
    hello: String
}
`)