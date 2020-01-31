import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { stringArg, mutationField, objectType } from "nexus/dist";
import { APP_SECRET, getUserId } from "../utils";
import { prismaObjectType } from "nexus-prisma";

export const Mutation = prismaObjectType({
  name: "Mutation",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

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
  resolve: async (parent, { name, email, password }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const user = await ctx.prisma.createUser({
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
