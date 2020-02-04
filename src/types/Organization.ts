import { prismaObjectType } from "nexus-prisma";

export const Organization = prismaObjectType({
  name: "Organization",
  description: "Organization that the owner has created",
  definition(t) {
    t.prismaFields(["*"]);
  }
});
