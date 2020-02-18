import { rule, shield } from "graphql-shield";
import { getUserId } from "./utils";

const rules = {
  // Add Developer role for testing
  // isDeveloper: rule()((parent, args, context) => {
  //   const userId = getUserId(context);
  //   return Boolean(userId);
  // }),
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isMenuOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const author = await context.prisma.menu({ id }).author();
    return userId === author.id;
  }),
  isOrganizationOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const owner = await context.prisma.organization({ id }).owner();
    return userId === owner.id;
  })
};

export const permissions = shield({
  Query: {
    // me: rules.isAuthenticatedUser
    // organizations: rules.isAuthenticatedUser
  },
  Mutation: {
    // createMenu: rules.isAuthenticatedUser
    // createOrganization: rules.isAuthenticatedUser
  }
});
