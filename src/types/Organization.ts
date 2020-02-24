import { prismaObjectType } from "nexus-prisma";

export const Organization = prismaObjectType({
  name: "Organization",
  description: "Organization that the owner has created",
  definition(t) {
    t.prismaFields([
      "name",
      "id",
      "createdBy",
      {
        name: "menus",
        args: [] // remove the arguments from the `organizations` field of the `User` type in the Prisma schema
      }
    ]);
  }
});
