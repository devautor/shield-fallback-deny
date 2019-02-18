import { rule } from "graphql-shield";
import { Context } from "../context";
import { getUserId } from "./utils";

/* Rules */

/**
 * If a user is not authenticated, getUserId throws error
 */
const isUserAuthenticated = rule({
  cache: "contextual"
})(async (parent, args, context: Context, info) => {
  try {
    await getUserId(context);
    return true;
  } catch (err) {
    return false;
  }
});

/**
 * Verify that this authenticated user is registered as a Customer in our DB
 */
const isUserCustomer = rule({
  cache: "contextual"
})(async (parent, args, context: Context, info) => {
  try {
    const uid = await getUserId(context);
    return context.prisma.$exists.customer(uid);
  } catch (err) {
    return false;
  }
});

/**
 * Verify that this authenticated user is registered as a StoreManager in our DB
 */
const isUserStoreManager = rule({
  cache: "contextual"
})(async (parent, args, context: Context, info) => {
  try {
    const uid = await getUserId(context);
    return context.prisma.$exists.storeManager(uid);
  } catch (err) {
    return false;
  }
});

export { isUserAuthenticated, isUserCustomer, isUserStoreManager };
