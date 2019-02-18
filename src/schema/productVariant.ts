import { gql } from "apollo-server";

const typeDefs = gql`
  type ProductVariant {
    id: ID!
    skuId: String!
    product: Product!
    isDefaultVariant: Boolean!
    title: String!
    stockUnits: Int!
    cartedByCustomersCount: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input ProductVariantWhereUniqueInput {
    id: ID!
  }

  enum ProductVariantOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }
`;

export default typeDefs;
