import { prismaObjectType } from "nexus-prisma";

export const Menu = prismaObjectType({
  name: "Menu",
  description: "Menu that the admin has created within an organization",
  definition(t) {
    t.prismaFields(["*", { name: "organization", args: [] }]);
  }
});

export const MenuChoice = prismaObjectType({
  name: "MenuChoice",
  description: "MenuChoice that the admin has created",
  definition(t) {
    t.prismaFields(["*", { name: "header", args: [] }]);
  }
});

export const MenuHeader = prismaObjectType({
  name: "MenuHeader",
  description: "MenuHeader that the admin has created",
  definition(t) {
    t.prismaFields(["*", { name: "menu", args: [] }]);
  }
});

export const MenuItem = prismaObjectType({
  name: "MenuItem",
  description: "MenuItem that the admin has created",
  definition(t) {
    t.prismaFields(["*", { name: "menu", args: [] }]);
  }
});

export const MenuSelection = prismaObjectType({
  name: "MenuSelection",
  description: "MenuSelection that the admin has created",
  definition(t) {
    t.prismaFields(["*", { name: "menuChoice", args: [] }]);
  }
});
