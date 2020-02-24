import { prismaObjectType } from "nexus-prisma";

export const Customer = prismaObjectType({
  name: "Customer",
  description: "The customer using the application",
  definition(t) {
    t.prismaFields(["*"]);
  }
});
