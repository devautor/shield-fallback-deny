export type Maybe<T> = T | null;

export interface CustomerCartItemCreateInput {
  productVariant: ProductVariantWhereUniqueInput;

  quantity: number;
}

export interface ProductVariantWhereUniqueInput {
  id: string;
}

export interface CustomerCartItemWhereUniqueInput {
  id?: Maybe<string>;
}

export interface CustomerWhereInput {
  id?: Maybe<string>;

  id_in?: Maybe<string[]>;

  emailId?: Maybe<string>;

  emailId_in?: Maybe<string[]>;

  AND?: Maybe<CustomerWhereInput[]>;

  OR?: Maybe<CustomerWhereInput[]>;

  NOT?: Maybe<CustomerWhereInput[]>;
}

export interface CustomerWhereUniqueInput {
  id?: Maybe<string>;

  emailId?: Maybe<string>;
}

export interface ProductWhereUniqueInput {
  id?: Maybe<string>;
}

export interface StoreManagerWhereUniqueInput {
  id?: Maybe<string>;
}

export enum CustomerCartItemOrderByInput {
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum CustomerOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum ProductVariantOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type DateTime = any;

export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  _blank?: Maybe<string>;

  customer?: Maybe<Customer>;
}

export interface Customer {
  id: string;

  emailId: string;

  mobileNumber?: Maybe<string>;

  name?: Maybe<string>;

  cartItems?: Maybe<CustomerCartItem[]>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface CustomerCartItem {
  id: string;

  customer: Customer;

  productVariant: ProductVariant;

  addedAtPrice: number;

  quantity: number;

  savedForLater: boolean;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface ProductVariant {
  id: string;

  skuId: string;

  product: Product;

  isDefaultVariant: boolean;

  title: string;

  stockUnits: number;

  cartedByCustomersCount: number;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface Product {
  id: string;

  name: string;

  brand: string;

  vendor?: Maybe<string>;

  tags: string[];

  variants?: Maybe<ProductVariant[]>;

  owner: StoreManager;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface StoreManager {
  id: string;

  uid: string;

  products: Product[];
}

export interface Mutation {
  _blank?: Maybe<string>;

  createCustomerCartItem: CreateCustomerCartItemMutationResponse;
}

export interface CreateCustomerCartItemMutationResponse {
  code: string;

  success: boolean;

  message: string;

  cartItem?: Maybe<CustomerCartItem>;
}

export interface Subscription {
  _blank?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateCustomerCartItemMutationArgs {
  data: CustomerCartItemCreateInput;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { ContextType } from "./src/context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = {}> {
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;

    customer?: CustomerResolver<Maybe<Customer>, TypeParent, Context>;
  }

  export type _BlankResolver<
    R = Maybe<string>,
    Parent = {},
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CustomerResolver<
    R = Maybe<Customer>,
    Parent = {},
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace CustomerResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = Customer> {
    id?: IdResolver<string, TypeParent, Context>;

    emailId?: EmailIdResolver<string, TypeParent, Context>;

    mobileNumber?: MobileNumberResolver<Maybe<string>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    cartItems?: CartItemsResolver<
      Maybe<CustomerCartItem[]>,
      TypeParent,
      Context
    >;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type EmailIdResolver<
    R = string,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type MobileNumberResolver<
    R = Maybe<string>,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CartItemsResolver<
    R = Maybe<CustomerCartItem[]>,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = Customer,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace CustomerCartItemResolvers {
  export interface Resolvers<
    Context = ContextType,
    TypeParent = CustomerCartItem
  > {
    id?: IdResolver<string, TypeParent, Context>;

    customer?: CustomerResolver<Customer, TypeParent, Context>;

    productVariant?: ProductVariantResolver<
      ProductVariant,
      TypeParent,
      Context
    >;

    addedAtPrice?: AddedAtPriceResolver<number, TypeParent, Context>;

    quantity?: QuantityResolver<number, TypeParent, Context>;

    savedForLater?: SavedForLaterResolver<boolean, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CustomerResolver<
    R = Customer,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type ProductVariantResolver<
    R = ProductVariant,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type AddedAtPriceResolver<
    R = number,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type SavedForLaterResolver<
    R = boolean,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = CustomerCartItem,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace ProductVariantResolvers {
  export interface Resolvers<
    Context = ContextType,
    TypeParent = ProductVariant
  > {
    id?: IdResolver<string, TypeParent, Context>;

    skuId?: SkuIdResolver<string, TypeParent, Context>;

    product?: ProductResolver<Product, TypeParent, Context>;

    isDefaultVariant?: IsDefaultVariantResolver<boolean, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    stockUnits?: StockUnitsResolver<number, TypeParent, Context>;

    cartedByCustomersCount?: CartedByCustomersCountResolver<
      number,
      TypeParent,
      Context
    >;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type SkuIdResolver<
    R = string,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type ProductResolver<
    R = Product,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type IsDefaultVariantResolver<
    R = boolean,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type StockUnitsResolver<
    R = number,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CartedByCustomersCountResolver<
    R = number,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = ProductVariant,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace ProductResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = Product> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    brand?: BrandResolver<string, TypeParent, Context>;

    vendor?: VendorResolver<Maybe<string>, TypeParent, Context>;

    tags?: TagsResolver<string[], TypeParent, Context>;

    variants?: VariantsResolver<Maybe<ProductVariant[]>, TypeParent, Context>;

    owner?: OwnerResolver<StoreManager, TypeParent, Context>;

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type BrandResolver<
    R = string,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type VendorResolver<
    R = Maybe<string>,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type TagsResolver<
    R = string[],
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type VariantsResolver<
    R = Maybe<ProductVariant[]>,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = StoreManager,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = DateTime,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = Product,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace StoreManagerResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = StoreManager> {
    id?: IdResolver<string, TypeParent, Context>;

    uid?: UidResolver<string, TypeParent, Context>;

    products?: ProductsResolver<Product[], TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = StoreManager,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type UidResolver<
    R = string,
    Parent = StoreManager,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type ProductsResolver<
    R = Product[],
    Parent = StoreManager,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = {}> {
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;

    createCustomerCartItem?: CreateCustomerCartItemResolver<
      CreateCustomerCartItemMutationResponse,
      TypeParent,
      Context
    >;
  }

  export type _BlankResolver<
    R = Maybe<string>,
    Parent = {},
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CreateCustomerCartItemResolver<
    R = CreateCustomerCartItemMutationResponse,
    Parent = {},
    Context = ContextType
  > = Resolver<R, Parent, Context, CreateCustomerCartItemArgs>;
  export interface CreateCustomerCartItemArgs {
    data: CustomerCartItemCreateInput;
  }
}

export namespace CreateCustomerCartItemMutationResponseResolvers {
  export interface Resolvers<
    Context = ContextType,
    TypeParent = CreateCustomerCartItemMutationResponse
  > {
    code?: CodeResolver<string, TypeParent, Context>;

    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;

    cartItem?: CartItemResolver<Maybe<CustomerCartItem>, TypeParent, Context>;
  }

  export type CodeResolver<
    R = string,
    Parent = CreateCustomerCartItemMutationResponse,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type SuccessResolver<
    R = boolean,
    Parent = CreateCustomerCartItemMutationResponse,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string,
    Parent = CreateCustomerCartItemMutationResponse,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
  export type CartItemResolver<
    R = Maybe<CustomerCartItem>,
    Parent = CreateCustomerCartItemMutationResponse,
    Context = ContextType
  > = Resolver<R, Parent, Context>;
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = ContextType, TypeParent = {}> {
    _blank?: _BlankResolver<Maybe<string>, TypeParent, Context>;
  }

  export type _BlankResolver<
    R = Maybe<string>,
    Parent = {},
    Context = ContextType
  > = SubscriptionResolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  ContextType
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  ContextType
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  ContextType
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<DateTime, any> {
  name: "DateTime";
}
export interface JSONScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: "JSON";
}

export interface IResolvers<Context = ContextType> {
  Query?: QueryResolvers.Resolvers<Context>;
  Customer?: CustomerResolvers.Resolvers<Context>;
  CustomerCartItem?: CustomerCartItemResolvers.Resolvers<Context>;
  ProductVariant?: ProductVariantResolvers.Resolvers<Context>;
  Product?: ProductResolvers.Resolvers<Context>;
  StoreManager?: StoreManagerResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  CreateCustomerCartItemMutationResponse?: CreateCustomerCartItemMutationResponseResolvers.Resolvers<
    Context
  >;
  Subscription?: SubscriptionResolvers.Resolvers<Context>;
  DateTime?: GraphQLScalarType;
  Json?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
