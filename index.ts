/**
 * ENTRY
 */
require("dotenv").config({ path: __dirname + "/.env" });
import server from "./src/apolloServer";
// import expressServer from "./src/express";

// Before express server: This `listen` method launches a web-server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
