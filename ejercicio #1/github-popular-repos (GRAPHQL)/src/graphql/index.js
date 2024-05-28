import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { resolvers } from "./resolvers/repoResolvers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaPath = join(__dirname, "schema", "repoSchema.graphql");
const typeDefs = readFileSync(schemaPath, "utf8");

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default graphqlHTTP({
  schema,
  graphiql: true,
});
