import { GraphQLServer } from "graphql-yoga";
const uuidv4 = require('uuid/v4');

const typeDefs = `
  type Query {
    sayHello: String
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int!): User!
  }

  type User {
    id : String!
    email: String!
    age: Int!
    name: String!

  }
`

const users = [{
  id: '1',
  name: 'Arun',
  email: 'arun@example.com',
  age: 27
}, {
  id: '2',
  name: 'Indira',
  email: 'indira@example.com'
}, {
  id: '3',
  name: 'Mike',
  email: 'mike@example.com'
}]

const resolvers = {
  Query: {
    sayHello: () => "Hello world",
  },
  Mutation: {
    createUser: (parent,args,ctx,info) => {
      
      const emailTaken = users.some((user) => {
        return user.email === args.email;
      })

      if(emailTaken){
        throw new Error('email already taken');
      }

      const user = {
        id : uuidv4(),
        name : args.name,
        age : args.age,
        email : args.email
      }

      users.push(user); // api call or insert in to db directly
      return user;
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on http://localhost:4000'))