import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    books: async () => {
      return [];
    },
  },
};

export default resolvers;
