import { rule, shield } from "graphql-shield";
import { getUserId } from "./utils";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isMenuOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const author = await context.prisma.menu({ id }).author();
    return userId === author.id;
  })
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser
  },
  Mutation: {
    createMenu: rules.isAuthenticatedUser
  }
});
