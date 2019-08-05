/**
 * ID
 * String
 * Int
 * Boolean
 * Float
 * Object
**/

import { GraphQLServer } from "graphql-yoga"

const typeDefs = `
  type Query {
    id: ID!
    name: String
    term : Int
    isExtendable : Boolean
    rateOfInterest: Float
    schemeDetails: Scheme
    type : [PLAN]
  }

  type Scheme {
      name: String
      details: String
      schemeNo: Int
  }

  enum PLAN {
    ANNUAL
    QUARTERLY
    MONTHLY
  }


`

const resolvers = {
    Query: {
        id: () => "a12dedf",
        name: () => "fixed deposit",
        term: () => 5,
        isExtendable: () => true,
        rateOfInterest: () => "3.5",
        schemeDetails: () => {
            return {
                "name": "savings scheme",
                "details": "this is a savings scheme",
                "schemeNo": 5
            }
        },
        type: () => ["ANNUAL","MONTHLY"]
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on http://localhost:4000'))