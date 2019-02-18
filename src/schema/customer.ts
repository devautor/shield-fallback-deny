import { gql } from "apollo-server";

const typeDefs = gql`
  extend type Query {
    customer: Customer
  }

  type Customer {
    id: ID!
    emailId: String!
    mobileNumber: String
    name: String
    cartItems: [CustomerCartItem!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CustomerWhereUniqueInput {
    id: ID
    emailId: String
  }

  input CustomerWhereInput {
    id: ID
    id_in: [ID!]
    emailId: String
    emailId_in: [String!]
    AND: [CustomerWhereInput!]
    OR: [CustomerWhereInput!]
    NOT: [CustomerWhereInput!]
  }

  enum CustomerOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }
`;

export default typeDefs;
