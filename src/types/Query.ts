import { queryType } from "nexus";
import { getUserId } from "../utils";

export const Query = queryType({
  definition: t => {
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
