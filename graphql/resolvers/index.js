const authResolver = require("./auth");
const usersResolver = require("./users");

const RootResolver = {
  ...authResolver,
  ...usersResolver,
};

module.exports = RootResolver;
