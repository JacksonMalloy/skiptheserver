import { prismaObjectType } from "nexus-prisma";

export const User = prismaObjectType({
  name: "User",
  description: "The user of the application",
  definition(t) {
    t.prismaFields(["*"]);
  }
});
