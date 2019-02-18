/**
 * Initialising Apollo server with executable schema and prisma in context
 */
import { ApolloServer } from "apollo-server";
import makeExecutableSchema from "./makeExecutableSchema";
import Prisma from "./prisma";
import { Context } from "./context";

const server = new ApolloServer({
  schema: makeExecutableSchema(),
  context: ({ request, response }: any): Context => ({
    request,
    response,
    prisma: Prisma
  }),
  debug: process.env.NODE_ENV !== "production",
  /**
   * masking and logging errors in production
   */
  formatError: error => {
    console.log("Server error", JSON.stringify(error));
    return new Error("Internal server error");
    // Or, you can delete the exception information
    // delete error.extensions.exception;
    // return error;
  }
});

const graphqlPath = server.graphqlPath;

export { server as default, graphqlPath };
