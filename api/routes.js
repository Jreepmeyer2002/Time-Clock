module.exports = app => {
    const punches = require("controllers/punch.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Punch
    router.post("/", punches.create);
  
    // Retrieve all punches
    router.get("/", punches.findAll);
  
    // Retrieve all published punches
    router.get("/published", punches.findAllPublished);
  
    // Retrieve a single Punch with id
    router.get("/:id", punches.findOne);
  
    // Update a Punch with id
    router.put("/:id", punches.update);
  
    // Delete a Punch with id
    router.delete("/:id", punches.delete);
  
    // Delete all punches
    router.delete("/", punches.deleteAll);
  
    app.use('/api/punches', router);
  };