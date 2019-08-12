import { GraphQLServer } from 'graphql-yoga'
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

import * as path from "path";
import resolvers from "./resolvers"
import permissionsMiddleware from "./middleware"
import db from './db'

const typesArray = fileLoader(path.join(__dirname, "./schemas"));
const typeDefs = mergeTypes(typesArray);
// Build the resolvers object



const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context:req => ({ ...req ,db}),
    middlewares: [permissionsMiddleware]
})

server.start({port:3000},() => {
    console.log('The server is up!')
})