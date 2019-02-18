import { ProductResolvers } from "../generated/resolvers-types";
import { ifStoreManagerOwnsThisResource } from "../auth/utils";

/**
 * Product has all fields public, except `vendor`
 */
const Product: ProductResolvers.Resolvers = {
  variants: async (root, args, context) => {
    try {
      return await context.prisma.product({ id: root.id }).variants(args);
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * private fields
   */
  vendor: async (root, args, context) => {
    try {
      await ifStoreManagerOwnsThisResource(context, {
        products_some: {
          id: root.id
        }
      });

      return root.vendor;
    } catch (error) {
      console.error(error);
    }
  }
};

export { Product };
