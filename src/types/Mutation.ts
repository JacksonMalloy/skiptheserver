import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {
  stringArg,
  mutationField,
  objectType,
  mutationType,
  idArg
} from "nexus/dist";
import { APP_SECRET, getUserId } from "../utils";
import { Organization } from "./Organization";

export const Mutation = mutationType({
  definition(t) {
    t.field("createOrganization", {
      type: "Organization",
      args: {
        name: stringArg({ required: true })
      },
      resolve: (parent, { name }, context) => {
        const userId = getUserId(context);
        return context.prisma.createOrganization({
          name,
          owner: { connect: { id: userId } }
        });
      }
    });
    t.field("createMenu", {
      type: "Menu",
      args: {
        title: stringArg({ required: true }),
        id: idArg()
      },
      resolve: async (parent, args, context) => {
        const { title, id } = args;
        const { prisma } = context;

        const organizationId = await prisma.organization({ id });
        console.log("hello");
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
  }
});

export const Menu = objectType({
  name: "Menu",
  definition(t) {
    t.string("title", { nullable: false });
    t.field("organization", {
      type: "Organization",
      nullable: false,
      list: true
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
