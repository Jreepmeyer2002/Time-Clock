const db = require("../models");
const Punch = db.punches;
const Op = db.Sequelize.Op;

// Create and Save a new Punch
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Punch
  const punch = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Punch in the database
  Punch.create(punch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Punch."
      });
    });
};

// Retrieve all Punches from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Punch.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving punches."
      });
    });
};

// Find a single Punch with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Punch.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Punch with id=" + id
      });
    });
};

// Update a Punch by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Punch.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Punch was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Punch with id=${id}. Maybe Punch was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Punch with id=" + id
      });
    });
};

// Delete a Punch with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Punch.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Punch was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Punch with id=${id}. Maybe Punch was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Punch with id=" + id
      });
    });
};

// Delete all punches from the database.
exports.deleteAll = (req, res) => {
  Punch.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} punches were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all punches."
      });
    });
};

// find all published Punch
exports.findAllPublished = (req, res) => {
  Punch.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving punches."
      });
    });
};