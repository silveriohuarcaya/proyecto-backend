/**
 * Main application routers
 */

//const healthcheck = require("./api/healthcheck");
//const user = require("./api/user");
import healthcheck from "./api/healthcheck/index.js";
import user from "./api/user/index.js";

//const people = require("./api/people");
// const payments = require("/api/payments");
// const auth = require("/api/auth");
// const users = require("/api/users");

function routes(app) {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", user);
  //app.use("/api/people", people);
  // app.use("/api/payments", payments);
  // app.use("/api/auth", auth);
  // app.use("/api/users", users);
}

// module.exports = routes;
export default routes;
