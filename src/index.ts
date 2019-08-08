import { GraphQLServer } from "graphql-yoga"

const typeDefs = `
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello: () => "Hello Indira",
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start({port:8080},() => console.log('Server is running on http://localhost:4000'))