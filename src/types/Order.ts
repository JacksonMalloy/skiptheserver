import { prismaObjectType } from "nexus-prisma";

export const Order = prismaObjectType({
  name: "Order",
  description: "Order that the customer has created",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

export const OrderItem = prismaObjectType({
  name: "OrderItem",
  description: "OrderItem that the customer has created",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

export const Table = prismaObjectType({
  name: "Table",
  description: "Table that the customer has created",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

export const Cart = prismaObjectType({
  name: "Cart",
  description: "Cart that the customer has created",
  definition(t) {
    t.prismaFields(["*"]);
  }
});
