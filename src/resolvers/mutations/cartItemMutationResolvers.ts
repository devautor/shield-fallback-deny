import { MutationResolvers } from "../../generated/resolvers-types";
import { getUserId } from "../../auth/utils";

const CartItemMutation: MutationResolvers.Resolvers = {
  /**
   * Authenticated customer is authorized to add items to their own cart
   */
  createCustomerCartItem: async (root, args, context) => {
    try {
      // Get Customer's ID from the auth signature
      const { uid } = await getUserId(context);

      const { quantity, productVariant } = args.data;
      const { salePrice } = await context.prisma.productVariant(productVariant);
      const createCartItemPromise = await context.prisma.createCustomerCartItem(
        {
          customer: {
            connect: {
              uid
            }
          },
          productVariant: {
            connect: {
              id: productVariant.id
            }
          },
          addedAtPrice: salePrice,
          quantity,
          savedForLater: false
        }
      );
      return {
        code: "200",
        success: true,
        message: "Item has been successfully added to the cart.",
        cartItem: createCartItemPromise
      };
    } catch (error) {
      console.error(error);
      return {
        code: "-1",
        success: false,
        message: "An error occured on the server side."
      };
    }
  }
};

export default CartItemMutation;
