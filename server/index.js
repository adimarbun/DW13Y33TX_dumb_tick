require("express-group-routes");

const { auth } = require("./middleware");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
const AUTH = require("./controllers/auth");
const CategoriesController = require("./controllers/categories");
const EventsController = require("./controllers/events");
const OrdersController = require("./controllers/order");
const UsersController = require("./controllers/profil");

app.group("/api/v1", router => {
  //login
  router.post("/login", AUTH.login);
  //Register
  router.post("/register", AUTH.register);

  //get categories
  router.get("/categories", CategoriesController.showAll);
  //post categories
  router.post("/category", CategoriesController.store);

  //post event
  router.post("/event", auth, EventsController.createEvent);

  //show events by category
  router.get("/category/:id/events", EventsController.showEventsCategory);
  //show events by id
  router.get("/event/:id", EventsController.showEventById);
  //show events all
  router.get("/events", EventsController.showEventAll);
  //show events title
  router.get("/event/", EventsController.showEventTitle);

  //post order
  router.post("/order", auth, OrdersController.postOrder);

  //update order
  router.put("/order/:id", auth, OrdersController.updateOrders);

  //get user by id
  router.get("/profile/:id", UsersController.showUser);
  //get orders when status=approved
  router.get("/orders/", OrdersController.showOrders);
});

app.listen(port, () => console.log(`listening on port ${port}`));
