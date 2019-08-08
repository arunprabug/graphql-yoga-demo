import { GraphQLServer } from 'graphql-yoga'
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";
import resolvers from "./resolvers"

import db from './db'

const typesArray = fileLoader(path.join(__dirname, "./schemas"));
const typeDefs = mergeTypes(typesArray);
// Build the resolvers object



/*const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
}) */