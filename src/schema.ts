import { makePrismaSchema } from "nexus-prisma";
import * as path from "path";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";
import {
  Menu,
  MenuChoice,
  MenuHeader,
  MenuItem,
  MenuSelection
} from "./types/Menu";
import { Order, OrderItem, Table, Cart } from "./types/Order";
import { User } from "./types/User";
import { Query } from "./types/Query";
import { Organization } from "./types/Organization";
import {
  Mutation,
  AuthPayload,
  registerUser,
  loginUser
} from "./types/Mutation";

export const schema = makePrismaSchema({
  types: {
    Menu,
    Organization,
    MenuChoice,
    MenuHeader,
    MenuItem,
    MenuSelection,
    Order,
    OrderItem,
    Table,
    Cart,
    User,
    Query,
    Mutation,
    AuthPayload,
    registerUser,
    loginUser
  },

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  },

  nonNullDefaults: {
    input: false,
    output: false
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "types"
      }
    ],
    contextType: "types.Context"
  }
});
