import { GraphQLServer } from "graphql-yoga";
import { schema } from "./schema";
import { prisma } from "./generated/prisma-client";
import { permissions } from "./permissions";

const server = new GraphQLServer({
  schema,
  context: request => {
    return {
      ...request,
      prisma
    };
  },
  middlewares: [permissions]
});

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  },
  () => console.log(`Server ready at http://localhost:4000`)
);
