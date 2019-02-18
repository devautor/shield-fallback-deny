import { CustomerCartItemResolvers } from "../generated/resolvers-types";
import { ifCustomerOwnsThisResource } from "../auth/utils";

/**
 * Authenticated customer is authorized to access their own cart items only
 * all scalar fields of CustomerCartItem are `private` to owner Customer only
 */
const CustomerCartItem: CustomerCartItemResolvers.Resolvers = {
  id: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });

      return root.id;
    } catch (error) {
      console.error(error);
    }
  },
  customer: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });

      return await context.prisma.customerCartItem({ id: root.id }).customer();
    } catch (error) {
      console.error(error);
    }
  },
  productVariant: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });

      return await context.prisma
        .customerCartItem({ id: root.id })
        .productVariant();
    } catch (error) {
      console.error(error);
    }
  },
  addedAtPrice: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });

      return root.addedAtPrice;
    } catch (error) {
      console.error(error);
    }
  },
  quantity: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });
      return root.quantity;
    } catch (error) {
      console.error(error);
    }
  },
  savedForLater: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });
      return root.savedForLater;
    } catch (error) {
      console.error(error);
    }
  },
  createdAt: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });
      return root.createdAt;
    } catch (error) {
      console.error(error);
    }
  },
  updatedAt: async (root, args, context) => {
    try {
      ifCustomerOwnsThisResource(context, {
        cartItems_some: {
          id: root.id
        }
      });
      return root.updatedAt;
    } catch (error) {
      console.error(error);
    }
  }
};

export { CustomerCartItem };
