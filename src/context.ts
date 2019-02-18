/**
 * Defining `context` as an interface with Prisma added to it
 * This context will be set in Apollo Server constructor API
 */

import { Request, Response } from "express";
import { Prisma } from "./generated/prisma-client-ts";

export interface Context {
  request: Request;
  response: Response;
  prisma: Prisma;
}

// for codegene.yml
export type ContextType = {
  req: Request;
  res: Response;
  prisma: Prisma;
};
