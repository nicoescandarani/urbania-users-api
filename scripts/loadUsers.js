db = db.getSiblingDB('urbania');
db.users.drop();
db.users.insertMany(
  [
    { user: "test1", email: "nico@nico1.com", password: "test1" },
    { user: "test2", email: "nico@nico2.com", password: "test2" },
    { user: "test3", email: "nico@nico3.com", password: "test3" },
    { user: "test4", email: "nico@nico4.com", password: "test4" },
    { user: "test5", email: "nico@nico5.com", password: "test5" },
    { user: "test6", email: "nico@nico6.com", password: "test6" },
    { user: "test7", email: "nico@nico7.com", password: "test7" },
    { user: "test8", email: "nico@nico8.com", password: "test8" },
    { user: "test9", email: "nico@nico9.com", password: "test9" },
    { user: "test10", email: "nico@nico10.com", password: "test10" },
  ]
);
