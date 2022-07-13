const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const UserType = require("./user_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        // * passportJS assigns a user property on the request if the user is signed in
        // * We can check for this property to see if the user is logged in
        return req.user;
      },
    },
  },
});

module.exports = RootQueryType;
