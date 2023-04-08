const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body);
  //Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }
  //Create the Tutorial
  const tutorial = new Tutorial({
    name: req.body.name,
    jobPosition: req.body.jobPosition,
    dateOfJoining: req.body.dateOfJoining,
    address: req.body.address,
    frontendLanguage: req.body.frontendLanguage,
    backendLanguage: req.body.backendLanguage,
  });

  //Save Tutorial in database
  tutorial
    .save(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tutorial",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  Tutorial.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while retrieving tutorial.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(400)
          .send({ message: "Not found Tutorial with this id=" + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving tutorial With id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModifiy: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}.Maybe Tutorial was not found!`,
        });
      } else res.send({ message: "Tutorial was updated sucessfully." });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error updating Tutorial with id=" + id });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
