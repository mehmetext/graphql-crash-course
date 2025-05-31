import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 4001;

const apolloServer = new ApolloServer({
  typeDefs: `
    type Query {
      "Hello World açıklaması"
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello World",
    },
  },
});

apolloServer.start().then(() => {
  app.use("/graphql", cors(), express.json(), expressMiddleware(apolloServer));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
