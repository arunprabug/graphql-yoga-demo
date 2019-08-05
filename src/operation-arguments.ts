
import { GraphQLServer } from "graphql-yoga"

const typeDefs = `
  type Query {
    greeting(name:String) : String!
  }
`

const resolvers = {
    Query: {
        greeting: (parent, args, ctx, info) => {
            console.log(args);
            return "Hello !"
        }
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on http://localhost:4000'))