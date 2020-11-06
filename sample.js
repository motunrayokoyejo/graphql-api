function defineSchema(){
    var schema = null;
    schema = buildSchema(`
        type MainQuery {
         library: [String!]!
     }
     type MainMutation {
         recordBook(title: String): String
     }
     schema {
         query: MainQuery
         mutation: MainMutation
     }
     `);
     return schema;
}

function getLibrary(){
    return[
        'All things bright and beautiful',
        'God is good to me',
        'Oluwadarasimi'
    ];
}
//setup route for graphql
app.use(
    '/graphql', 
    graphqlHTTP({
    schema: defineSchema(),
    rootvalue:{
        library: getLibrary()
    },
    graphiql: true
    })
);