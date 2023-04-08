//Define Routes
module.exports = (app) => {
  const tutorials = require("../controllers/web4nextKhushbu.controller");
  var router = require("express").Router();

  //Create a new Tutorial
  router.post("/create", tutorials.create);

  //Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  //Detele a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  app.use("/web4next", router);
};
