import { prismaObjectType } from "nexus-prisma";

export const User = prismaObjectType({
  name: "User",
  description: "The owner of the application",
  definition(t) {
    t.prismaFields(["*"]);
  }
});
