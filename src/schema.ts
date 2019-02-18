// Graphql schema of the server API

import { gql } from "apollo-server";

// importing typescript files, each is gql`...` extending types Query, Mutation, Subscription
import cartSchema from "./schema/cart";
import customerSchema from "./schema/customer";
import productSchema from "./schema/product";
import productVariantSchema from "./schema/productVariant";

const blankSchema = gql`
  scalar DateTime
  scalar JSON
  type Query {
    _blank: String
  }

  type Mutation {
    _blank: String
  }

  type Subscription {
    _blank: String
  }
`;

const schema = [
  blankSchema,
  cartSchema,
  customerSchema,
  productSchema,
  productVariantSchema
];

export default schema;
