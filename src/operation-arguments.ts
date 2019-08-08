
import { GraphQLServer } from "graphql-yoga"

const typeDefs = `
  type Query {
    greeting(firstName:String, lastName:String!) : String!
  }
`

const resolvers = {
    Query: {
        greeting: (parent, args, ctx, info) => {
            console.log(args);
            return `Hello ${args.firstName} ${args.lastName}`
        }
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on http://localhost:4000'))