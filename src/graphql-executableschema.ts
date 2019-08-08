import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import schema from './schema'




const server = new GraphQLServer({
    schema:schema,
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})