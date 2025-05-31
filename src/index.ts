import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import apolloServer from "./graphql/apollo-server";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 4000;

apolloServer.start().then(() => {
  app.use("/graphql", cors(), express.json(), expressMiddleware(apolloServer));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
