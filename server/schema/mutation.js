const graphql = require("graphql");
const { module } = require("../../webpack.config");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, context) {},
    },
  },
});

module.export = mutation;
