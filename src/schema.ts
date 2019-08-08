const { makeExecutableSchema } = require('graphql-tools')
const { importSchema } = require('graphql-import')

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

const types = importSchema('./src/schema-operations.graphql')
const operations = importSchema('./src/schema-types.graphql')

const schema = makeExecutableSchema({
    typeDefs:[types,operations],
    resolvers: {
       Query,
       Mutation,
       User,
       Post,
       Comment
   }, 
})

export default schema;