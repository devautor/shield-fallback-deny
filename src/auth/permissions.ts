import { shield, allow, or } from "graphql-shield";
import { isUserCustomer, isUserStoreManager } from "./shield";

export const permissions = shield(
  {
    Query: {
      customer: isUserCustomer
    },
    Mutation: {
      _blank: allow,
      createCustomerCartItem: isUserCustomer
    },
    /**
     *  all scalar fields of CustomerCartItem are authorized to owner Customer only
     */
    CustomerCartItem: isUserCustomer,
    /**
     * only scalar field public is `name`
     * rest all are authorized to owner Customer only
     * */
    Customer: {
      id: isUserCustomer,
      emailId: isUserCustomer,
      mobileNumber: isUserCustomer,
      name: allow,
      cartItems: isUserCustomer,
      createdAt: isUserCustomer,
      updatedAt: isUserCustomer
    },
    /**
     * Product has all fields public, except `vendor` in `Product`
     */
    Product: {
      // `allow` rest all other fields to public access
      vendor: or(isUserStoreManager)
    },
    ProductVariant: {
      id: allow,
      skuId: or(isUserStoreManager),
      product: allow,
      isDefaultVariant: allow,
      title: allow,
      stockUnits: or(isUserStoreManager),
      cartedByCustomersCount: or(isUserStoreManager),
      createdAt: allow,
      updatedAt: allow
    },
    /**
     * All fields of a store manager are private to it
     */
    StoreManager: or(isUserStoreManager)
  },
  {
    debug: true, //process.env.NODE_ENV !== "production",
    // to see errors thrown inside resolvers
    allowExternalErrors: true, // process.env.NODE_ENV !== "production",
    // FIXME:
    fallbackError: new Error(
      "You are not authorised to access these resources!"
    ),
    fallbackRule: allow
  }
);

export default permissions;
