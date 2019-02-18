import { gql } from "apollo-server";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    brand: String!
    vendor: String
    tags: [String!]!
    variants: [ProductVariant!]
    owner: StoreManager!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type StoreManager {
    id: ID!
    uid: String!
    products: [Product!]!
  }

  input ProductWhereUniqueInput {
    id: ID
  }

  input StoreManagerWhereUniqueInput {
    id: ID
  }
`;

export default typeDefs;
