const graphql = require("graphql");
const { module } = require("../../webpack.config");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

module.export = mutation;
