import { prismaObjectType } from "nexus-prisma";

export const User = prismaObjectType({
  name: "User",
  description: "The user of the application",
  definition(t) {
    t.prismaFields([
      "id",
      "name",
      "email",
      {
        name: "organizations",
        args: [] // remove the arguments from the `organizations` field of the `User` type in the Prisma schema
      }
    ]);
  }
});
