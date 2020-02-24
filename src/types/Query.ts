import { queryType, intArg, stringArg } from "nexus";
import { prismaObjectType } from "nexus-prisma";
import { getUserId } from "../utils";

export const Query = queryType({
  definition: t => {
    t.field("me", {
      type: "User",
      description: "Get the active user",
      nullable: true,
      resolve: (parent, args, context) => {
        const userId = getUserId(context as any);
        return context.prisma.user({ id: userId });
      }
    });
    t.field("users", {
      type: "User",
      description: "A list of all users",
      list: true,
      resolve: (parent, args, context) => {
        return context.prisma.users();
      }
    });
    t.field("userById", {
      type: "User",
      description: "Get a user by ID",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.users({
          where: {
            id: id
          }
        });
      }
    });
    t.field("customer", {
      type: "Customer",
      description: "Get the active customer",
      nullable: true,
      resolve: (parent, args, context) => {
        const userId = getUserId(context as any);
        return context.prisma.customer({ id: userId });
      }
    });
    t.field("customers", {
      type: "Customer",
      description: "A list of all customers",
      list: true,
      resolve: (parent, args, context) => {
        return context.prisma.customers();
      }
    });
    t.field("customerById", {
      type: "Customer",
      description: "Get a customer by ID",
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.customer({ id });
      }
    });
    t.field("customersByOrganization", {
      type: "Customer",
      description: "Get all customers associated with an organization",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.customers({
          where: {
            organizations_every: {
              id
            }
          }
        });
      }
    });
    t.field("menuById", {
      type: "Menu",
      description: "Get a menu by ID",
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.menu({ id });
      }
    });
    t.field("menusByOrganization", {
      type: "Menu",
      description: "Get all menus associated with an organization",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.menus({
          where: {
            organization: {
              id
            }
          }
        });
      }
    });
  }
});
