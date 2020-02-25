import { prisma } from "../src/generated/prisma-client";

async function main() {
  // Create user with every field complete
  await prisma.createUser({
    email: "burgers@malloy.com",
    name: "Joe Burger",
    password: "123456",
    organizations: {
      create: [
        {
          name: "Malloy Burgers",
          id: "12w=-p23e-0o34r09i45t98u",
          menus: {
            create: [
              {
                title: "Burger Menu",
                published: false,
                menu_items: {
                  create: [
                    {
                      name: "The Big One",
                      basePrice: "$9.50",
                      description:
                        "The Tastiest burger in Vancouver, filled with lettuce, tomato, bacon, and green peppers!",
                      menuHeader: {
                        create: {
                          name: "Burgers",
                          subHeader:
                            "Each burger comes with an endless supply of french fries."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose extra toppings",
                          subHeader: "Each additional topping adds $0.50",
                          selections: {
                            create: [
                              {
                                name: "Tomato",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Onions",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Bacon",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      name: "The Bigger One",
                      basePrice: "$12.50",
                      description: "The Biggest burger money can buy!",
                      menuHeader: {
                        create: {
                          name: "Burgers",
                          subHeader:
                            "Each burger comes with an endless supply of french fries."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose extra toppings",
                          subHeader: "Each additional topping adds $0.50",
                          selections: {
                            create: [
                              {
                                name: "Tomato",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Onions",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Bacon",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      name: "Veggie Burger",
                      basePrice: "$10.50",
                      description: "A veggie fan favourite.",
                      menuHeader: {
                        create: {
                          name: "Burgers",
                          subHeader:
                            "Each burger comes with an endless supply of french fries."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose extra toppings",
                          subHeader: "Each additional topping adds $0.50",
                          selections: {
                            create: [
                              {
                                name: "Tomato",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Onions",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Bacon",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      name: "Greasy Bomb",
                      basePrice: "$11.50",
                      description:
                        "This burger is topped with bacon on top of bacon on top of more bacon",
                      menuHeader: {
                        create: {
                          name: "Burgers",
                          subHeader:
                            "Each burger comes with an endless supply of french fries."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose extra toppings",
                          subHeader: "Each additional topping adds $0.50",
                          selections: {
                            create: [
                              {
                                name: "Tomato",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Onions",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Bacon",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      name: "The Small Guy",
                      basePrice: "$5.50",
                      description:
                        "A kids burger to fill your little ones stomach. (Hopefully not too full!)",
                      menuHeader: {
                        create: {
                          name: "Burgers",
                          subHeader:
                            "Each burger comes with an endless supply of french fries."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose extra toppings",
                          subHeader: "Each additional topping adds $0.50",
                          selections: {
                            create: [
                              {
                                name: "Tomato",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Onions",
                                selected: false,
                                valueAdd: "$0.50"
                              },
                              {
                                name: "Bacon",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                title: "Drinks Menu",
                published: false,
                menu_items: {
                  create: [
                    {
                      name: "Apple Juice",
                      basePrice: "$2.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Refreshments to cool you down."
                        }
                      }
                    },
                    {
                      name: "Orange Juice",
                      basePrice: "$2.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Refreshments to cool you down."
                        }
                      }
                    },
                    {
                      name: "Sprite",
                      basePrice: "$2.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Pop for that sugar sweet taste"
                        }
                      }
                    },
                    {
                      name: "Pepsi",
                      basePrice: "$2.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Pop for that sugar sweet taste"
                        }
                      }
                    },
                    {
                      name: "Coke",
                      basePrice: "$2.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Pop for that sugar sweet taste"
                        }
                      }
                    },
                    {
                      name: "Water",
                      basePrice: "$1.50",
                      menuHeader: {
                        create: {
                          name: "Drinks",
                          subHeader: "Refreshments to cool you down."
                        }
                      },
                      options: {
                        create: {
                          header: "Choose from Bottle or Tap",
                          subHeader: "Water fresh from BC",
                          selections: {
                            create: [
                              {
                                name: "Dasani",
                                selected: false,
                                valueAdd: "$0.50"
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  });

  // Create user with developer permissions
  await prisma.createUser({
    email: "jacksdeveloper@gmail.com",
    name: "Jackson Malloy",
    password: "123456",
    permissions: "DEVELOPER"
  });

  // Create user with Admin permissions on Malloy's burgers
  await prisma.createUser({
    email: "jacksadmin@gmail.com",
    name: "Jackson Malloy",
    password: "123456",
    permissions: "ADMIN",
    organizations: {
      connect: {
        id: "12w=-p23e-0o34r09i45t98u"
      }
    }
  });

  // Create 10 customers
  await prisma.createCustomer({
    email: "tonyfernanda@gmail.com",
    name: "Tony Fernanda",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "scottjimson@hotmail.ca",
    name: "Scott Jimson",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "pgabrichio@gmail.com",
    name: "Peter Gabrichio",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "sunnywang@microsoft.com",
    name: "Sunny Wang",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "emilyturner@gmail.com",
    name: "Emily Turner",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "alexandriusshirbo@hotmail.ca",
    name: "Alex Shirbio",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "granolafreddy@gmail.com",
    name: "Freddy Granola",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "jessicamarando@gmail.com",
    name: "Jessica Marando",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "keenanmalloy@hotmail.com",
    name: "Keenan Malloy",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "emmasimpsons@hotmail.ca",
    name: "Emma Simpsons",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "kellykribo@gmail.com",
    name: "Kelly Kribo",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "connorharkit@hotmail.ca",
    name: "Connor Harkit",
    password: "123456"
  });

  await prisma.createCustomer({
    email: "greenboysoup@lego.ca",
    name: "Gerald Opinions",
    password: "123456"
  });
}

main();
