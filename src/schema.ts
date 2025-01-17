import { makePrismaSchema } from "nexus-prisma";
import * as path from "path";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";
import {
  MenuChoice,
  MenuHeader,
  MenuItem,
  MenuSelection,
  Menu
} from "./types/Menu";
import { Order, OrderItem, Table, Cart } from "./types/Order";
import { User } from "./types/User";
import { Customer } from "./types/Customer";
import { Query } from "./types/Query";
import { Organization } from "./types/Organization";
import {
  Mutation,
  AuthPayload,
  registerDeveloper,
  registerDirector,
  registerAdmin,
  loginUser,
  registerCustomer,
  loginCustomer,
  CustomerAuthPayload
} from "./types/Mutation";

export const schema = makePrismaSchema({
  types: {
    Menu,
    Customer,
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
    registerDeveloper,
    registerDirector,
    registerAdmin,
    loginUser,
    registerCustomer,
    loginCustomer,
    CustomerAuthPayload
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
