import express, { json, urlencoded } from "express";
import graphqlServer from "./graphql/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/graphql", graphqlServer);

export default app;
