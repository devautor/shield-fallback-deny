import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Mutation {
    createCustomerCartItem(
      data: CustomerCartItemCreateInput!
    ): CreateCustomerCartItemMutationResponse!
  }

  type CustomerCartItem {
    id: ID!
    customer: Customer!
    productVariant: ProductVariant!
    addedAtPrice: Float!
    quantity: Int!
    savedForLater: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type CreateCustomerCartItemMutationResponse {
    code: String!
    success: Boolean!
    message: String!
    cartItem: CustomerCartItem
  }

  input CustomerCartItemWhereUniqueInput {
    id: ID
  }

  enum CustomerCartItemOrderByInput {
    quantity_ASC
    quantity_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input CustomerCartItemCreateInput {
    productVariant: ProductVariantWhereUniqueInput!
    quantity: Int!
  }
`;

export default typeDefs;
