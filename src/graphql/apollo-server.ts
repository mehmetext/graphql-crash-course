import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import path from "path";

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf-8");

const apolloServer = new ApolloServer({
  typeDefs,
});

export default apolloServer;
