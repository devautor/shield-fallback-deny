import { AuthenticationError } from "apollo-server";
import { Context } from "../context";

/**
 * FIXME: Fix getAuthenticationLink function (WTH is this, callback endpoints?!!!)
 * @param token
 */
export function getAuthenticationLink(
  token: string
): { web: string; app: string } {
  if (process.env.NODE_ENV !== "production") {
    return {
      web: `http://localhost:3001/confirm?token=${token}`,
      app: `exp://exp.host/@maticzav/gimbdogodki?token=${token}`
    };
  } else {
    return {
      web: `https://dogodki.gimb.xyz/confirm?token=${token}`,
      app: `exp://exp.host/@maticzav/gimbdogodki?token=${token}`
    };
  }
}

/**
 * Get an authenticated user's ID
 * @param context Resolver context
 */
export const getUserId = async (context: Context) => {
  const uid = "djagikuacfgadchasdocihascolikahc";
  return { uid };
};

/**
 * Verify a customer's authorization
 * @param context Resolver context
 * @param testFor Object to test for ownership
 */
export const ifCustomerOwnsThisResource = async (context: Context, testFor) => {
  const { uid } = await getUserId(context);
  const ifExists = await await context.prisma.$exists.customer({
    uid,
    ...testFor
  });
  if (!ifExists) {
    throw new AuthenticationError(
      "You are not authorized to access this resource."
    );
  } else {
    return true;
  }
};

/**
 * Verify a store's authorization
 * @param context Resolver context
 * @param testFor Object to test for ownership
 */
export const ifStoreManagerOwnsThisResource = async (
  context: Context,
  testFor
) => {
  const { uid } = await getUserId(context);
  const ifExists = await context.prisma.$exists.storeManager({
    uid,
    ...testFor
  });
  console.log("From ifStoreManagerOwnsThisResource owner exists", ifExists);
  if (!ifExists) {
    throw new AuthenticationError(
      "You are not authorized to access this resource."
    );
  } else {
    return true;
  }
};

export class AuthError extends Error {
  constructor() {
    super("Request is not authorized to access this resource.");
  }
}
