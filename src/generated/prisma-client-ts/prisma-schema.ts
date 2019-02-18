export const typeDefs = /* GraphQL */ `type AggregateCustomer {
  count: Int!
}

type AggregateCustomerCartItem {
  count: Int!
}

type AggregateEntityAbstract {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductVariant {
  count: Int!
}

type AggregateStoreManager {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Customer {
  id: ID!
  uid: String!
  emailId: String!
  mobileNumber: String
  name: String
  cartItems(where: CustomerCartItemWhereInput, orderBy: CustomerCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomerCartItem!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CustomerCartItem {
  id: ID!
  customer: Customer!
  productVariant: ProductVariant!
  quantity: Int!
  savedForLater: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CustomerCartItemConnection {
  pageInfo: PageInfo!
  edges: [CustomerCartItemEdge]!
  aggregate: AggregateCustomerCartItem!
}

input CustomerCartItemCreateInput {
  customer: CustomerCreateOneWithoutCartItemsInput!
  productVariant: ProductVariantCreateOneWithoutCartedInInput!
  quantity: Int!
  savedForLater: Boolean
}

input CustomerCartItemCreateManyWithoutCustomerInput {
  create: [CustomerCartItemCreateWithoutCustomerInput!]
  connect: [CustomerCartItemWhereUniqueInput!]
}

input CustomerCartItemCreateManyWithoutProductVariantInput {
  create: [CustomerCartItemCreateWithoutProductVariantInput!]
  connect: [CustomerCartItemWhereUniqueInput!]
}

input CustomerCartItemCreateWithoutCustomerInput {
  productVariant: ProductVariantCreateOneWithoutCartedInInput!
  quantity: Int!
  savedForLater: Boolean
}

input CustomerCartItemCreateWithoutProductVariantInput {
  customer: CustomerCreateOneWithoutCartItemsInput!
  quantity: Int!
  savedForLater: Boolean
}

type CustomerCartItemEdge {
  node: CustomerCartItem!
  cursor: String!
}

enum CustomerCartItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  savedForLater_ASC
  savedForLater_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CustomerCartItemPreviousValues {
  id: ID!
  quantity: Int!
  savedForLater: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CustomerCartItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  savedForLater: Boolean
  savedForLater_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CustomerCartItemScalarWhereInput!]
  OR: [CustomerCartItemScalarWhereInput!]
  NOT: [CustomerCartItemScalarWhereInput!]
}

type CustomerCartItemSubscriptionPayload {
  mutation: MutationType!
  node: CustomerCartItem
  updatedFields: [String!]
  previousValues: CustomerCartItemPreviousValues
}

input CustomerCartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerCartItemWhereInput
  AND: [CustomerCartItemSubscriptionWhereInput!]
  OR: [CustomerCartItemSubscriptionWhereInput!]
  NOT: [CustomerCartItemSubscriptionWhereInput!]
}

input CustomerCartItemUpdateInput {
  customer: CustomerUpdateOneRequiredWithoutCartItemsInput
  productVariant: ProductVariantUpdateOneRequiredWithoutCartedInInput
  quantity: Int
  savedForLater: Boolean
}

input CustomerCartItemUpdateManyDataInput {
  quantity: Int
  savedForLater: Boolean
}

input CustomerCartItemUpdateManyMutationInput {
  quantity: Int
  savedForLater: Boolean
}

input CustomerCartItemUpdateManyWithoutCustomerInput {
  create: [CustomerCartItemCreateWithoutCustomerInput!]
  delete: [CustomerCartItemWhereUniqueInput!]
  connect: [CustomerCartItemWhereUniqueInput!]
  set: [CustomerCartItemWhereUniqueInput!]
  disconnect: [CustomerCartItemWhereUniqueInput!]
  update: [CustomerCartItemUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [CustomerCartItemUpsertWithWhereUniqueWithoutCustomerInput!]
  deleteMany: [CustomerCartItemScalarWhereInput!]
  updateMany: [CustomerCartItemUpdateManyWithWhereNestedInput!]
}

input CustomerCartItemUpdateManyWithoutProductVariantInput {
  create: [CustomerCartItemCreateWithoutProductVariantInput!]
  delete: [CustomerCartItemWhereUniqueInput!]
  connect: [CustomerCartItemWhereUniqueInput!]
  set: [CustomerCartItemWhereUniqueInput!]
  disconnect: [CustomerCartItemWhereUniqueInput!]
  update: [CustomerCartItemUpdateWithWhereUniqueWithoutProductVariantInput!]
  upsert: [CustomerCartItemUpsertWithWhereUniqueWithoutProductVariantInput!]
  deleteMany: [CustomerCartItemScalarWhereInput!]
  updateMany: [CustomerCartItemUpdateManyWithWhereNestedInput!]
}

input CustomerCartItemUpdateManyWithWhereNestedInput {
  where: CustomerCartItemScalarWhereInput!
  data: CustomerCartItemUpdateManyDataInput!
}

input CustomerCartItemUpdateWithoutCustomerDataInput {
  productVariant: ProductVariantUpdateOneRequiredWithoutCartedInInput
  quantity: Int
  savedForLater: Boolean
}

input CustomerCartItemUpdateWithoutProductVariantDataInput {
  customer: CustomerUpdateOneRequiredWithoutCartItemsInput
  quantity: Int
  savedForLater: Boolean
}

input CustomerCartItemUpdateWithWhereUniqueWithoutCustomerInput {
  where: CustomerCartItemWhereUniqueInput!
  data: CustomerCartItemUpdateWithoutCustomerDataInput!
}

input CustomerCartItemUpdateWithWhereUniqueWithoutProductVariantInput {
  where: CustomerCartItemWhereUniqueInput!
  data: CustomerCartItemUpdateWithoutProductVariantDataInput!
}

input CustomerCartItemUpsertWithWhereUniqueWithoutCustomerInput {
  where: CustomerCartItemWhereUniqueInput!
  update: CustomerCartItemUpdateWithoutCustomerDataInput!
  create: CustomerCartItemCreateWithoutCustomerInput!
}

input CustomerCartItemUpsertWithWhereUniqueWithoutProductVariantInput {
  where: CustomerCartItemWhereUniqueInput!
  update: CustomerCartItemUpdateWithoutProductVariantDataInput!
  create: CustomerCartItemCreateWithoutProductVariantInput!
}

input CustomerCartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  customer: CustomerWhereInput
  productVariant: ProductVariantWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  savedForLater: Boolean
  savedForLater_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CustomerCartItemWhereInput!]
  OR: [CustomerCartItemWhereInput!]
  NOT: [CustomerCartItemWhereInput!]
}

input CustomerCartItemWhereUniqueInput {
  id: ID
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  uid: String!
  emailId: String!
  mobileNumber: String
  name: String
  cartItems: CustomerCartItemCreateManyWithoutCustomerInput
}

input CustomerCreateOneWithoutCartItemsInput {
  create: CustomerCreateWithoutCartItemsInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutCartItemsInput {
  uid: String!
  emailId: String!
  mobileNumber: String
  name: String
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  emailId_ASC
  emailId_DESC
  mobileNumber_ASC
  mobileNumber_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CustomerPreviousValues {
  id: ID!
  uid: String!
  emailId: String!
  mobileNumber: String
  name: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateInput {
  uid: String
  emailId: String
  mobileNumber: String
  name: String
  cartItems: CustomerCartItemUpdateManyWithoutCustomerInput
}

input CustomerUpdateManyMutationInput {
  uid: String
  emailId: String
  mobileNumber: String
  name: String
}

input CustomerUpdateOneRequiredWithoutCartItemsInput {
  create: CustomerCreateWithoutCartItemsInput
  update: CustomerUpdateWithoutCartItemsDataInput
  upsert: CustomerUpsertWithoutCartItemsInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateWithoutCartItemsDataInput {
  uid: String
  emailId: String
  mobileNumber: String
  name: String
}

input CustomerUpsertWithoutCartItemsInput {
  update: CustomerUpdateWithoutCartItemsDataInput!
  create: CustomerCreateWithoutCartItemsInput!
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  emailId: String
  emailId_not: String
  emailId_in: [String!]
  emailId_not_in: [String!]
  emailId_lt: String
  emailId_lte: String
  emailId_gt: String
  emailId_gte: String
  emailId_contains: String
  emailId_not_contains: String
  emailId_starts_with: String
  emailId_not_starts_with: String
  emailId_ends_with: String
  emailId_not_ends_with: String
  mobileNumber: String
  mobileNumber_not: String
  mobileNumber_in: [String!]
  mobileNumber_not_in: [String!]
  mobileNumber_lt: String
  mobileNumber_lte: String
  mobileNumber_gt: String
  mobileNumber_gte: String
  mobileNumber_contains: String
  mobileNumber_not_contains: String
  mobileNumber_starts_with: String
  mobileNumber_not_starts_with: String
  mobileNumber_ends_with: String
  mobileNumber_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cartItems_every: CustomerCartItemWhereInput
  cartItems_some: CustomerCartItemWhereInput
  cartItems_none: CustomerCartItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
  uid: String
  emailId: String
}

scalar DateTime

type EntityAbstract {
  id: ID!
  typeName: String!
}

type EntityAbstractConnection {
  pageInfo: PageInfo!
  edges: [EntityAbstractEdge]!
  aggregate: AggregateEntityAbstract!
}

input EntityAbstractCreateInput {
  typeName: String!
}

input EntityAbstractCreateOneInput {
  create: EntityAbstractCreateInput
  connect: EntityAbstractWhereUniqueInput
}

type EntityAbstractEdge {
  node: EntityAbstract!
  cursor: String!
}

enum EntityAbstractOrderByInput {
  id_ASC
  id_DESC
  typeName_ASC
  typeName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EntityAbstractPreviousValues {
  id: ID!
  typeName: String!
}

type EntityAbstractSubscriptionPayload {
  mutation: MutationType!
  node: EntityAbstract
  updatedFields: [String!]
  previousValues: EntityAbstractPreviousValues
}

input EntityAbstractSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EntityAbstractWhereInput
  AND: [EntityAbstractSubscriptionWhereInput!]
  OR: [EntityAbstractSubscriptionWhereInput!]
  NOT: [EntityAbstractSubscriptionWhereInput!]
}

input EntityAbstractUpdateDataInput {
  typeName: String
}

input EntityAbstractUpdateInput {
  typeName: String
}

input EntityAbstractUpdateManyMutationInput {
  typeName: String
}

input EntityAbstractUpdateOneRequiredInput {
  create: EntityAbstractCreateInput
  update: EntityAbstractUpdateDataInput
  upsert: EntityAbstractUpsertNestedInput
  connect: EntityAbstractWhereUniqueInput
}

input EntityAbstractUpsertNestedInput {
  update: EntityAbstractUpdateDataInput!
  create: EntityAbstractCreateInput!
}

input EntityAbstractWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  typeName: String
  typeName_not: String
  typeName_in: [String!]
  typeName_not_in: [String!]
  typeName_lt: String
  typeName_lte: String
  typeName_gt: String
  typeName_gte: String
  typeName_contains: String
  typeName_not_contains: String
  typeName_starts_with: String
  typeName_not_starts_with: String
  typeName_ends_with: String
  typeName_not_ends_with: String
  AND: [EntityAbstractWhereInput!]
  OR: [EntityAbstractWhereInput!]
  NOT: [EntityAbstractWhereInput!]
}

input EntityAbstractWhereUniqueInput {
  id: ID
  typeName: String
}

scalar Long

type Mutation {
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createCustomerCartItem(data: CustomerCartItemCreateInput!): CustomerCartItem!
  updateCustomerCartItem(data: CustomerCartItemUpdateInput!, where: CustomerCartItemWhereUniqueInput!): CustomerCartItem
  updateManyCustomerCartItems(data: CustomerCartItemUpdateManyMutationInput!, where: CustomerCartItemWhereInput): BatchPayload!
  upsertCustomerCartItem(where: CustomerCartItemWhereUniqueInput!, create: CustomerCartItemCreateInput!, update: CustomerCartItemUpdateInput!): CustomerCartItem!
  deleteCustomerCartItem(where: CustomerCartItemWhereUniqueInput!): CustomerCartItem
  deleteManyCustomerCartItems(where: CustomerCartItemWhereInput): BatchPayload!
  createEntityAbstract(data: EntityAbstractCreateInput!): EntityAbstract!
  updateEntityAbstract(data: EntityAbstractUpdateInput!, where: EntityAbstractWhereUniqueInput!): EntityAbstract
  updateManyEntityAbstracts(data: EntityAbstractUpdateManyMutationInput!, where: EntityAbstractWhereInput): BatchPayload!
  upsertEntityAbstract(where: EntityAbstractWhereUniqueInput!, create: EntityAbstractCreateInput!, update: EntityAbstractUpdateInput!): EntityAbstract!
  deleteEntityAbstract(where: EntityAbstractWhereUniqueInput!): EntityAbstract
  deleteManyEntityAbstracts(where: EntityAbstractWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProductVariant(data: ProductVariantCreateInput!): ProductVariant!
  updateProductVariant(data: ProductVariantUpdateInput!, where: ProductVariantWhereUniqueInput!): ProductVariant
  updateManyProductVariants(data: ProductVariantUpdateManyMutationInput!, where: ProductVariantWhereInput): BatchPayload!
  upsertProductVariant(where: ProductVariantWhereUniqueInput!, create: ProductVariantCreateInput!, update: ProductVariantUpdateInput!): ProductVariant!
  deleteProductVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  deleteManyProductVariants(where: ProductVariantWhereInput): BatchPayload!
  createStoreManager(data: StoreManagerCreateInput!): StoreManager!
  updateStoreManager(data: StoreManagerUpdateInput!, where: StoreManagerWhereUniqueInput!): StoreManager
  updateManyStoreManagers(data: StoreManagerUpdateManyMutationInput!, where: StoreManagerWhereInput): BatchPayload!
  upsertStoreManager(where: StoreManagerWhereUniqueInput!, create: StoreManagerCreateInput!, update: StoreManagerUpdateInput!): StoreManager!
  deleteStoreManager(where: StoreManagerWhereUniqueInput!): StoreManager
  deleteManyStoreManagers(where: StoreManagerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  description: String!
  tags: [String!]!
  variants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant!]
  owner: StoreManager!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  description: String!
  tags: ProductCreatetagsInput
  variants: ProductVariantCreateManyWithoutProductInput
  owner: StoreManagerCreateOneWithoutProductsInput!
}

input ProductCreateManyWithoutOwnerInput {
  create: [ProductCreateWithoutOwnerInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductCreatetagsInput {
  set: [String!]
}

input ProductCreateWithoutOwnerInput {
  name: String!
  description: String!
  tags: ProductCreatetagsInput
  variants: ProductVariantCreateManyWithoutProductInput
}

input ProductCreateWithoutVariantsInput {
  name: String!
  description: String!
  tags: ProductCreatetagsInput
  owner: StoreManagerCreateOneWithoutProductsInput!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  description: String!
  tags: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  description: String
  tags: ProductUpdatetagsInput
  variants: ProductVariantUpdateManyWithoutProductInput
  owner: StoreManagerUpdateOneRequiredWithoutProductsInput
}

input ProductUpdateManyDataInput {
  name: String
  description: String
  tags: ProductUpdatetagsInput
}

input ProductUpdateManyMutationInput {
  name: String
  description: String
  tags: ProductUpdatetagsInput
}

input ProductUpdateManyWithoutOwnerInput {
  create: [ProductCreateWithoutOwnerInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneRequiredWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  update: ProductUpdateWithoutVariantsDataInput
  upsert: ProductUpsertWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdatetagsInput {
  set: [String!]
}

input ProductUpdateWithoutOwnerDataInput {
  name: String
  description: String
  tags: ProductUpdatetagsInput
  variants: ProductVariantUpdateManyWithoutProductInput
}

input ProductUpdateWithoutVariantsDataInput {
  name: String
  description: String
  tags: ProductUpdatetagsInput
  owner: StoreManagerUpdateOneRequiredWithoutProductsInput
}

input ProductUpdateWithWhereUniqueWithoutOwnerInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutOwnerDataInput!
}

input ProductUpsertWithoutVariantsInput {
  update: ProductUpdateWithoutVariantsDataInput!
  create: ProductCreateWithoutVariantsInput!
}

input ProductUpsertWithWhereUniqueWithoutOwnerInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutOwnerDataInput!
  create: ProductCreateWithoutOwnerInput!
}

type ProductVariant {
  id: ID!
  entityType: EntityAbstract!
  product: Product!
  isDefaultVariant: Boolean!
  title: String!
  listPrice: Float!
  salePrice: Float!
  cartedIn(where: CustomerCartItemWhereInput, orderBy: CustomerCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomerCartItem!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProductVariantConnection {
  pageInfo: PageInfo!
  edges: [ProductVariantEdge]!
  aggregate: AggregateProductVariant!
}

input ProductVariantCreateInput {
  entityType: EntityAbstractCreateOneInput!
  product: ProductCreateOneWithoutVariantsInput!
  isDefaultVariant: Boolean
  title: String!
  listPrice: Float!
  salePrice: Float!
  cartedIn: CustomerCartItemCreateManyWithoutProductVariantInput
}

input ProductVariantCreateManyWithoutProductInput {
  create: [ProductVariantCreateWithoutProductInput!]
  connect: [ProductVariantWhereUniqueInput!]
}

input ProductVariantCreateOneWithoutCartedInInput {
  create: ProductVariantCreateWithoutCartedInInput
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantCreateWithoutCartedInInput {
  entityType: EntityAbstractCreateOneInput!
  product: ProductCreateOneWithoutVariantsInput!
  isDefaultVariant: Boolean
  title: String!
  listPrice: Float!
  salePrice: Float!
}

input ProductVariantCreateWithoutProductInput {
  entityType: EntityAbstractCreateOneInput!
  isDefaultVariant: Boolean
  title: String!
  listPrice: Float!
  salePrice: Float!
  cartedIn: CustomerCartItemCreateManyWithoutProductVariantInput
}

type ProductVariantEdge {
  node: ProductVariant!
  cursor: String!
}

enum ProductVariantOrderByInput {
  id_ASC
  id_DESC
  isDefaultVariant_ASC
  isDefaultVariant_DESC
  title_ASC
  title_DESC
  listPrice_ASC
  listPrice_DESC
  salePrice_ASC
  salePrice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductVariantPreviousValues {
  id: ID!
  isDefaultVariant: Boolean!
  title: String!
  listPrice: Float!
  salePrice: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProductVariantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isDefaultVariant: Boolean
  isDefaultVariant_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  listPrice: Float
  listPrice_not: Float
  listPrice_in: [Float!]
  listPrice_not_in: [Float!]
  listPrice_lt: Float
  listPrice_lte: Float
  listPrice_gt: Float
  listPrice_gte: Float
  salePrice: Float
  salePrice_not: Float
  salePrice_in: [Float!]
  salePrice_not_in: [Float!]
  salePrice_lt: Float
  salePrice_lte: Float
  salePrice_gt: Float
  salePrice_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductVariantScalarWhereInput!]
  OR: [ProductVariantScalarWhereInput!]
  NOT: [ProductVariantScalarWhereInput!]
}

type ProductVariantSubscriptionPayload {
  mutation: MutationType!
  node: ProductVariant
  updatedFields: [String!]
  previousValues: ProductVariantPreviousValues
}

input ProductVariantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductVariantWhereInput
  AND: [ProductVariantSubscriptionWhereInput!]
  OR: [ProductVariantSubscriptionWhereInput!]
  NOT: [ProductVariantSubscriptionWhereInput!]
}

input ProductVariantUpdateInput {
  entityType: EntityAbstractUpdateOneRequiredInput
  product: ProductUpdateOneRequiredWithoutVariantsInput
  isDefaultVariant: Boolean
  title: String
  listPrice: Float
  salePrice: Float
  cartedIn: CustomerCartItemUpdateManyWithoutProductVariantInput
}

input ProductVariantUpdateManyDataInput {
  isDefaultVariant: Boolean
  title: String
  listPrice: Float
  salePrice: Float
}

input ProductVariantUpdateManyMutationInput {
  isDefaultVariant: Boolean
  title: String
  listPrice: Float
  salePrice: Float
}

input ProductVariantUpdateManyWithoutProductInput {
  create: [ProductVariantCreateWithoutProductInput!]
  delete: [ProductVariantWhereUniqueInput!]
  connect: [ProductVariantWhereUniqueInput!]
  set: [ProductVariantWhereUniqueInput!]
  disconnect: [ProductVariantWhereUniqueInput!]
  update: [ProductVariantUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProductVariantUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProductVariantScalarWhereInput!]
  updateMany: [ProductVariantUpdateManyWithWhereNestedInput!]
}

input ProductVariantUpdateManyWithWhereNestedInput {
  where: ProductVariantScalarWhereInput!
  data: ProductVariantUpdateManyDataInput!
}

input ProductVariantUpdateOneRequiredWithoutCartedInInput {
  create: ProductVariantCreateWithoutCartedInInput
  update: ProductVariantUpdateWithoutCartedInDataInput
  upsert: ProductVariantUpsertWithoutCartedInInput
  connect: ProductVariantWhereUniqueInput
}

input ProductVariantUpdateWithoutCartedInDataInput {
  entityType: EntityAbstractUpdateOneRequiredInput
  product: ProductUpdateOneRequiredWithoutVariantsInput
  isDefaultVariant: Boolean
  title: String
  listPrice: Float
  salePrice: Float
}

input ProductVariantUpdateWithoutProductDataInput {
  entityType: EntityAbstractUpdateOneRequiredInput
  isDefaultVariant: Boolean
  title: String
  listPrice: Float
  salePrice: Float
  cartedIn: CustomerCartItemUpdateManyWithoutProductVariantInput
}

input ProductVariantUpdateWithWhereUniqueWithoutProductInput {
  where: ProductVariantWhereUniqueInput!
  data: ProductVariantUpdateWithoutProductDataInput!
}

input ProductVariantUpsertWithoutCartedInInput {
  update: ProductVariantUpdateWithoutCartedInDataInput!
  create: ProductVariantCreateWithoutCartedInInput!
}

input ProductVariantUpsertWithWhereUniqueWithoutProductInput {
  where: ProductVariantWhereUniqueInput!
  update: ProductVariantUpdateWithoutProductDataInput!
  create: ProductVariantCreateWithoutProductInput!
}

input ProductVariantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  entityType: EntityAbstractWhereInput
  product: ProductWhereInput
  isDefaultVariant: Boolean
  isDefaultVariant_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  listPrice: Float
  listPrice_not: Float
  listPrice_in: [Float!]
  listPrice_not_in: [Float!]
  listPrice_lt: Float
  listPrice_lte: Float
  listPrice_gt: Float
  listPrice_gte: Float
  salePrice: Float
  salePrice_not: Float
  salePrice_in: [Float!]
  salePrice_not_in: [Float!]
  salePrice_lt: Float
  salePrice_lte: Float
  salePrice_gt: Float
  salePrice_gte: Float
  cartedIn_every: CustomerCartItemWhereInput
  cartedIn_some: CustomerCartItemWhereInput
  cartedIn_none: CustomerCartItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductVariantWhereInput!]
  OR: [ProductVariantWhereInput!]
  NOT: [ProductVariantWhereInput!]
}

input ProductVariantWhereUniqueInput {
  id: ID
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  variants_every: ProductVariantWhereInput
  variants_some: ProductVariantWhereInput
  variants_none: ProductVariantWhereInput
  owner: StoreManagerWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  customerCartItem(where: CustomerCartItemWhereUniqueInput!): CustomerCartItem
  customerCartItems(where: CustomerCartItemWhereInput, orderBy: CustomerCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomerCartItem]!
  customerCartItemsConnection(where: CustomerCartItemWhereInput, orderBy: CustomerCartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerCartItemConnection!
  entityAbstract(where: EntityAbstractWhereUniqueInput!): EntityAbstract
  entityAbstracts(where: EntityAbstractWhereInput, orderBy: EntityAbstractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EntityAbstract]!
  entityAbstractsConnection(where: EntityAbstractWhereInput, orderBy: EntityAbstractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntityAbstractConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  productVariant(where: ProductVariantWhereUniqueInput!): ProductVariant
  productVariants(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductVariant]!
  productVariantsConnection(where: ProductVariantWhereInput, orderBy: ProductVariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductVariantConnection!
  storeManager(where: StoreManagerWhereUniqueInput!): StoreManager
  storeManagers(where: StoreManagerWhereInput, orderBy: StoreManagerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StoreManager]!
  storeManagersConnection(where: StoreManagerWhereInput, orderBy: StoreManagerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoreManagerConnection!
  node(id: ID!): Node
}

type StoreManager {
  id: ID!
  uid: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type StoreManagerConnection {
  pageInfo: PageInfo!
  edges: [StoreManagerEdge]!
  aggregate: AggregateStoreManager!
}

input StoreManagerCreateInput {
  uid: String!
  products: ProductCreateManyWithoutOwnerInput
}

input StoreManagerCreateOneWithoutProductsInput {
  create: StoreManagerCreateWithoutProductsInput
  connect: StoreManagerWhereUniqueInput
}

input StoreManagerCreateWithoutProductsInput {
  uid: String!
}

type StoreManagerEdge {
  node: StoreManager!
  cursor: String!
}

enum StoreManagerOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoreManagerPreviousValues {
  id: ID!
  uid: String!
}

type StoreManagerSubscriptionPayload {
  mutation: MutationType!
  node: StoreManager
  updatedFields: [String!]
  previousValues: StoreManagerPreviousValues
}

input StoreManagerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoreManagerWhereInput
  AND: [StoreManagerSubscriptionWhereInput!]
  OR: [StoreManagerSubscriptionWhereInput!]
  NOT: [StoreManagerSubscriptionWhereInput!]
}

input StoreManagerUpdateInput {
  uid: String
  products: ProductUpdateManyWithoutOwnerInput
}

input StoreManagerUpdateManyMutationInput {
  uid: String
}

input StoreManagerUpdateOneRequiredWithoutProductsInput {
  create: StoreManagerCreateWithoutProductsInput
  update: StoreManagerUpdateWithoutProductsDataInput
  upsert: StoreManagerUpsertWithoutProductsInput
  connect: StoreManagerWhereUniqueInput
}

input StoreManagerUpdateWithoutProductsDataInput {
  uid: String
}

input StoreManagerUpsertWithoutProductsInput {
  update: StoreManagerUpdateWithoutProductsDataInput!
  create: StoreManagerCreateWithoutProductsInput!
}

input StoreManagerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [StoreManagerWhereInput!]
  OR: [StoreManagerWhereInput!]
  NOT: [StoreManagerWhereInput!]
}

input StoreManagerWhereUniqueInput {
  id: ID
  uid: String
}

type Subscription {
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  customerCartItem(where: CustomerCartItemSubscriptionWhereInput): CustomerCartItemSubscriptionPayload
  entityAbstract(where: EntityAbstractSubscriptionWhereInput): EntityAbstractSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  productVariant(where: ProductVariantSubscriptionWhereInput): ProductVariantSubscriptionPayload
  storeManager(where: StoreManagerSubscriptionWhereInput): StoreManagerSubscriptionPayload
}
`