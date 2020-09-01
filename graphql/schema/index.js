const { buildSchema } = require("graphql");

module.exports = buildSchema(`
scalar Date

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
    user: User
    _id: ID!
  }

type User {
    _id: ID!
    password: String
    firstName: String!
    lastName: String!
    email: String!
    timezone: String!
    phone: String!
    tokkenApp: String
    country: String!
    supervisor: ID
    profileImg: String
   
  }


  input UserInput {
    password: String!
    firstName: String!
    lastName: String!
    email: String!
    timezone: String!
    phone: String!
    tokkenApp: String
    country: String!
    supervisor: ID
    profileImg: String
  }

  type tokenAuth {
    isAuth: Boolean!
}

  type RootQuery {
      users: [User!]!
      login(email: String!, password: String!): AuthData!
      checkLogin: tokenAuth!
      


  }
  
  type RootMutation {
    createUser(userInput: UserInput): User
    

  }
  schema {
      query: RootQuery
      mutation: RootMutation
  }

`);
