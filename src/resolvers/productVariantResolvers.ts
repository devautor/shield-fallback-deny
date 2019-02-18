import { ProductVariantResolvers } from "../generated/resolvers-types";
import { ifStoreManagerOwnsThisResource } from "../auth/utils";

const ProductVariant: ProductVariantResolvers.Resolvers = {
  product: async (root, args, context) => {
    try {
      return await context.prisma.productVariant({ id: root.id }).product();
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * Verify that following fields are accessed by owning seller or manager only
   */
  skuId: async (root, args, context) => {
    try {
      await ifStoreManagerOwnsThisResource(context, {
        products_some: {
          variants_some: {
            id: root.id
          }
        }
      });

      return await context.prisma.productVariant({ id: root.id }).skuId;
    } catch (error) {
      console.error(error);
    }
  },
  stockUnits: async (root, args, context) => {
    try {
      await ifStoreManagerOwnsThisResource(context, {
        products_some: {
          variants_some: {
            id: root.id
          }
        }
      });

      return await context.prisma.productVariant({ id: root.id }).stockUnits
        .length;
    } catch (error) {
      console.error(error);
    }
  },
  cartedByCustomersCount: async (root, args, context) => {
    try {
      await ifStoreManagerOwnsThisResource(context, {
        products_some: {
          variants_some: {
            id: root.id
          }
        }
      });

      return await context.prisma
        .customerCartItemsConnection({
          where: {
            productVariant: {
              id: root.id
            }
          }
        })
        .aggregate()
        .count();
    } catch (error) {
      console.error(error);
    }
  }
};

export { ProductVariant };
