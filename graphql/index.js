const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");

const graphQlSchema = require("./schema/index");
const graphQlResolvers = require("./resolvers/index");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

module.exports = app;
