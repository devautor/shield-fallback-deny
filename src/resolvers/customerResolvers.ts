import { CustomerResolvers } from "../generated/resolvers-types";
import { ifCustomerOwnsThisResource } from "../auth/utils";

/**
 * Authenticated customer is authorized to access their own app data only
 * only scalar fields left `public` is `name`
 */
const Customer: CustomerResolvers.Resolvers = {
  cartItems: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return await context.prisma.customer({ id: root.id }).cartItems(args);
    } catch (error) {
      console.error(error);
    }
  },
  id: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return root.id;
    } catch (error) {
      console.error(error);
    }
  },
  emailId: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return root.emailId;
    } catch (error) {
      console.error(error);
    }
  },
  mobileNumber: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return root.mobileNumber;
    } catch (error) {
      console.error(error);
    }
  },
  createdAt: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return root.createdAt;
    } catch (error) {
      console.error(error);
    }
  },
  updatedAt: async (root, args, context) => {
    try {
      await ifCustomerOwnsThisResource(context, {
        id: root.id
      });

      return root.updatedAt;
    } catch (error) {
      console.error(error);
    }
  }
};

export { Customer };
