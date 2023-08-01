// dbAdmin = db.getSiblingDB("admin");
// dbAdmin.createUser({
//   user: "admin",
//   pwd: "password",
//   roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
//   mechanisms: ["SCRAM-SHA-1"],
// });

// // Authenticate user
// dbAdmin.auth({
//   user: "admin",
//   pwd: "password",
//   mechanisms: ["SCRAM-SHA-1"],
//   digestPassword: true,
// });

// // Create DB and collection
// db = new Mongo().getDB("no-country");
// // db.createCollection("customer_transaction", { capped: false });
