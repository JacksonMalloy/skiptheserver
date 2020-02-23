import { queryType, intArg, stringArg } from "nexus";
import { prismaObjectType } from "nexus-prisma";
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
    t.field("users", {
      type: "User",
      list: true,
      description: "A list of all users",
      resolve: (parent, args, context) => {
        return context.prisma.users();
      }
    });
    t.field("userById", {
      type: "User",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      description: "Get a user by ID",
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
      nullable: true,
      resolve: (parent, args, context) => {
        const userId = getUserId(context as any);
        return context.prisma.customer({ id: userId });
      }
    });
    t.field("customers", {
      type: "Customer",
      list: true,
      description: "A list of all customers",
      resolve: (parent, args, context) => {
        return context.prisma.customers();
      }
    });
    t.field("customerById", {
      type: "Customer",
      args: {
        id: stringArg({ required: true })
      },
      description: "Get a customer by ID",
      resolve: (parent, { id }, context) => {
        return context.prisma.customer({ id });
      }
    });
    t.field("customersByOrganization", {
      type: "Customer",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      description: "Get a customer by ID",
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
      args: {
        id: stringArg({ required: true })
      },
      description: "Get a menu by ID",
      resolve: (parent, { id }, context) => {
        return context.prisma.menu({ id });
      }
    });
    t.field("menusByOrganization", {
      type: "Menu",
      list: true,
      args: {
        id: stringArg({ required: true })
      },
      description: "Get a menu by ID",
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
