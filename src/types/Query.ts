import { prismaObjectType } from "nexus-prisma";
import { queryType } from "nexus";
import { getUserId } from "../utils";

export const Query = prismaObjectType({
  name: "Query",
  definition: t => {
    t.prismaFields(["*"]);
    t.field("me", {
      type: "User",
      nullable: true,
      resolve: (parent, args, context) => {
        const userId = getUserId(context as any);
        return context.prisma.user({ id: userId });
      }
    });
  }
});

export const getCurrentUser = queryType({
  definition(t) {
    t.field("me", {
      type: "User",
      nullable: true,
      resolve: (parent, args, context) => {
        const userId = getUserId(context as any);
        return context.prisma.user({ id: userId });
      }
    });
  }
});
