import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {
  stringArg,
  mutationField,
  objectType,
  mutationType,
  intArg
} from "nexus/dist";
import { APP_SECRET, getUserId } from "../utils";

export const Mutation = mutationType({
  definition(t) {
    t.field("createOrganization", {
      type: "Organization",
      args: {
        name: stringArg({ required: true }),
        id: stringArg({ required: true })
      },
      resolve: (parent, { name, id }, context) => {
        return context.prisma.createOrganization({
          name,
          createdBy: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("deleteOrganization", {
      type: "Organization",
      nullable: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: (parent, { id }, context) => {
        return context.prisma.deleteOrganization({ id });
      }
    });
    t.field("createMenu", {
      type: "Menu",
      args: {
        title: stringArg({ required: true }),
        id: stringArg({ required: true })
      },
      resolve: async (parent, args, context) => {
        const { title, id } = args;
        const { prisma } = context;

        return prisma.createMenu({
          title,
          organization: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("publishMenu", {
      type: "Menu",
      nullable: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        return context.prisma.updateMenu({
          where: { id },
          data: {
            published: true
          }
        });
      }
    });
    t.field("deleteMenu", {
      type: "Menu",
      nullable: true,
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        return context.prisma.deleteMenu({ id });
      }
    });
    t.field("createMenuItem", {
      type: "MenuItem",
      args: {
        name: stringArg({ required: true }),
        id: stringArg({ required: true }),
        basePrice: stringArg({ required: true })
      },
      resolve: async (parent, args, context) => {
        const { name, id, basePrice } = args;
        const { prisma } = context;

        return prisma.createMenuItem({
          name,
          basePrice,
          menu: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("deleteMenuItem", {
      type: "MenuItem",
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        const { prisma } = context;
        return prisma.deleteMenuItem({ id });
      }
    });
    t.field("createMenuChoice", {
      type: "MenuChoice",
      args: {
        header: stringArg({ required: true }),
        id: stringArg({ required: true })
      },
      resolve: async (parent, args, context) => {
        const { header, id } = args;
        const { prisma } = context;

        return prisma.createMenuChoice({
          header,
          menu_items: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("deleteMenuChoice", {
      type: "MenuChoice",
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        const { prisma } = context;
        return prisma.deleteMenuChoice({ id });
      }
    });
    t.field("createMenuHeader", {
      type: "MenuHeader",
      args: {
        name: stringArg({ required: true }),
        id: stringArg({ required: true })
      },
      resolve: async (parent, args, context) => {
        const { name, id } = args;
        const { prisma } = context;

        return prisma.createMenuHeader({
          name,
          menu_items: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("deleteMenuHeader", {
      type: "MenuHeader",
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        const { prisma } = context;
        return prisma.deleteMenuHeader({ id });
      }
    });
    t.field("createMenuSelection", {
      type: "MenuSelection",
      args: {
        name: stringArg({ required: true }),
        id: stringArg({ required: true })
      },
      resolve: async (parent, args, context) => {
        const { name, id } = args;
        const { prisma } = context;

        return prisma.createMenuSelection({
          name,
          option: {
            connect: {
              id
            }
          }
        });
      }
    });
    t.field("deleteMenuSelection", {
      type: "MenuSelection",
      args: {
        id: stringArg({ required: true })
      },
      resolve: async (parent, { id }, context) => {
        const { prisma } = context;
        return prisma.deleteMenuSelection({ id });
      }
    });
  }
});

// User Authentication
export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.field("user", {
      type: "User"
    });
    t.string("token");
  }
});

export const registerUser = mutationField("registerUser", {
  type: "AuthPayload",
  args: {
    name: stringArg({ nullable: true }),
    email: stringArg({ required: true }),
    password: stringArg({ required: true })
  },
  resolve: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
});

export const loginUser = mutationField("loginUser", {
  type: "AuthPayload",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true })
  },
  resolve: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Invalid password");
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
});

// Customer Authentication
export const CustomerAuthPayload = objectType({
  name: "CustomerAuthPayload",
  definition(t) {
    t.field("customer", {
      type: "Customer"
    });
    t.string("token");
  }
});

export const registerCustomer = mutationField("registerCustomer", {
  type: "CustomerAuthPayload",
  args: {
    name: stringArg({ nullable: true }),
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    id: stringArg({ required: true })
  },
  resolve: async (parent, { name, email, password, id }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createCustomer({
      name,
      email,
      password: hashedPassword,
      organizations: {
        connect: {
          id
        }
      }
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
});

export const loginCustomer = mutationField("loginCustomer", {
  type: "CustomerAuthPayload",
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    id: stringArg({ required: true })
  },
  resolve: async (parent, { email, password, id }, context) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Invalid password");
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
});
