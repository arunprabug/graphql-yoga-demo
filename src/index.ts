import { GraphQLServer } from "graphql-yoga"

const typeDefs = `
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello: () => "Hello world",
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on http://localhost:4000'))