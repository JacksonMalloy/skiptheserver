import { prismaObjectType } from "nexus-prisma";

export const User = prismaObjectType({
  name: "User",
  description: "The owner of the application",
  definition(t) {
    t.prismaFields([
      "id",
      "name",
      "email",
      "permissions",
      {
        name: "organizations",
        args: [] // remove the arguments from the `organizations` field of the `User` type in the Prisma schema
      }
    ]);
  }
});

export const Customer = prismaObjectType({
  name: "Customer",
  description: "The customer using the application",
  definition(t) {
    t.prismaFields([
      "id",
      "name",
      "email",
      "permissions",
      {
        name: "organizations",
        args: [] // remove the arguments from the `organizations` field of the `User` type in the Prisma schema
      }
    ]);
  }
});
