import { verify } from "jsonwebtoken";
import { Prisma } from "./generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request?: any;
}

export const APP_SECRET = "appsecret321";

interface Token {
  userId: string;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = verify(token, APP_SECRET) as Token;
    return userId;
  }
}
