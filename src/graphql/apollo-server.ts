import { ApolloServer, BaseContext } from "@apollo/server";
import { readFileSync } from "fs";
import path from "path";
import resolvers from "./resolvers";

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf-8");

const apolloServer = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

export default apolloServer;
